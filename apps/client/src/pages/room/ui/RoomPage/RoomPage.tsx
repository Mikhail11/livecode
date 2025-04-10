import { useState } from 'react';

import { Layout } from './RoomPage.styles';
import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';

import { CODE_TEMPLATE } from './constants';

export const RoomPage = () => {
  const [code, setCode] = useState<string>('');

  return (
    <Layout>
      <Editor defaultCode={CODE_TEMPLATE} onChange={setCode} />
      <Playground code={code} />
    </Layout>
  );
};
