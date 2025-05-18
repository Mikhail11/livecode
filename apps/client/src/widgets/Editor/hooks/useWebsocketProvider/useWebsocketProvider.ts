import { useEffect, useState } from 'react';

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

import { useParams } from 'react-router';
import { NullableProvider } from '../../model';
import { validate } from 'uuid';
import { WEBSOCKET_BASE_URL } from '@constants';

export const useWebsocketProvider = (ydoc: Y.Doc): NullableProvider => {
  const [provider, setProvider] = useState<NullableProvider>(null);

  const { id: roomId } = useParams<'id'>();

  useEffect(() => {
    if (!roomId || !validate(roomId)) {
      console.error('Invalid roomId');

      return;
    }

    const provider = new WebsocketProvider(WEBSOCKET_BASE_URL, roomId, ydoc);

    setProvider(provider);

    return () => {
      provider?.destroy();
      ydoc.destroy();
    };
  }, [ydoc, roomId]);

  return provider;
};
