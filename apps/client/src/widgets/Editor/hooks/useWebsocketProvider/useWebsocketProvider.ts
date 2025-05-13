import { useEffect, useState } from 'react';

import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

import { useParams } from 'react-router';
import { NullableProvider } from '../../model';

export const useWebsocketProvider = (ydoc: Y.Doc): NullableProvider => {
  const [provider, setProvider] = useState<NullableProvider>(null);

  const { id: roomId } = useParams<'id'>();

  useEffect(() => {
    if (!roomId) {
      return;
    }

    const provider = new WebsocketProvider(
      // 'ws://localhost:5000/editor',
      'ws://localhost:1234',
      roomId,
      ydoc
    );

    setProvider(provider);

    return () => {
      provider?.destroy();
      ydoc.destroy();
    };
  }, [ydoc, roomId]);

  return provider;
};
