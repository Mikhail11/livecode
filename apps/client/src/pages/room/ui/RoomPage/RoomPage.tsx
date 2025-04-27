import { Layout } from './RoomPage.styles';
import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';
import { OutputConsole } from '@widgets/OutputConsole/ui/OutputConsole/OutputConsole';
import { ExecuteCode } from '@features/ExecuteCode';

import { CODE_TEMPLATE } from './constants';

export const RoomPage = () => {
  return (
    <Layout>
      <Editor defaultCode={CODE_TEMPLATE} />
      {/* <Playground code={code} /> */}
      <OutputConsole />

      <ExecuteCode />
    </Layout>
  );
};
