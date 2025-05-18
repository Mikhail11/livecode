import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, WebSocket, Data } from 'ws';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@WebSocketGateway(Number(process.env.WEBSOCKET_SERVER_PORT))
export class EditorGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('WebSocketProxyGateway');

  private yjsHost: string;
  private yjsPort: string;

  private readonly uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  constructor(private readonly configService: ConfigService) {
    this.yjsHost = configService.get('YJS_WEBSOCKET_HOST') as string;
    this.yjsPort = configService.get('YJS_WEBSOCKET_PORT') as string;
  }

  afterInit(server: Server) {
    this.logger.log('WebSocket Proxy Gateway initialized');
  }

  handleConnection(client: WebSocket, request: Request) {
    const roomId = request.url.slice(1);

    if (!this.uuidRegex.test(roomId)) {
      client.close(4001, 'Invalid URL');

      return;
    }

    this.logger.log(`Client connected: ${roomId}`);

    // Адрес целевого WebSocket-сервера
    const targetServerUrl = `${this.yjsHost}:${this.yjsPort}/${roomId}`;

    // Подключаемся к внешнему серверу
    const upstreamSocket = new WebSocket(targetServerUrl);

    // Перенаправление сообщений от клиента к внешнему серверу
    client.on('message', (message: Data) => {
      this.logger.debug(
        `----->>> Передача сообщения на внешний сервер: ${JSON.stringify(message)}`,
      );

      // Подумать насчет очереди сообщений: пока соединение не готово, входящие сообщения складываются в массив. Как только соединение установлено - отправка всех накопившихся соединений
      if (upstreamSocket.readyState === WebSocket.OPEN) {
        upstreamSocket.send(message);
      } else {
        this.logger.warn('WebSocket not ready!');
      }
    });

    // Перенаправление сообщений от внешнего сервера к клиенту
    upstreamSocket.on('message', (message: Data) => {
      this.logger.debug(
        `<<<----- Ответ от внешнего сервера: ${JSON.stringify(message)}`,
      );

      client.send(message);
    });

    client.on('close', () => {
      this.logger.log('Клиент отключился');
      upstreamSocket.close();
    });

    upstreamSocket.on('error', (err) => {
      this.logger.error('Ошибка во внешнем соединении:', err.message);
      client.close();
    });
  }

  handleDisconnect(client: WebSocket) {
    this.logger.warn('Клиент отключен');
  }
}
