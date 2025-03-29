import { useState } from 'react';

import { Editor } from '../Editor';
import { Playground } from '../Playground';

import { Layout } from './Page.styles';

export const RoomPage = () => {
  const [code, setCode] = useState<string>('');
  return (
    <Layout>
      <Editor onChange={setCode} />
      <Playground  code={code} />
    </Layout>
  );
};
