import { useState } from 'react';

import { Layout } from './RoomPage.styles';
import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';

export const RoomPage = () => {
  const [code, setCode] = useState<string>('');

  return (
    <Layout>
      <Editor onChange={setCode} />
      <Playground code={code} />
    </Layout>
  );
};
