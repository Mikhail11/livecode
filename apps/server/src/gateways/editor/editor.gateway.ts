import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Request } from 'express';
import { Server, WebSocket } from 'ws';
// import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';
import { setupWSConnection } from 'y-websocket/bin/utils';

@WebSocketGateway({ path: '/editor' })
export class EditorGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor() {}

  @WebSocketServer()
  server: Server;

  private doc = new Y.Doc();

  handleConnection(connection: WebSocket, request: Request): void {
    console.log('Client connected:');
    // Отправка текущего состояния документа клиенту
    // connection.send(JSON.stringify(this.doc));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    setupWSConnection(connection, request, { docName: '1' });
  }

  handleDisconnect(connection: WebSocket) {
    console.log('Client disconnected:');
  }
}
