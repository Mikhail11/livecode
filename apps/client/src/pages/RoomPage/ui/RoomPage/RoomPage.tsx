import { Editor } from '@widgets/Editor';
// import { Playground } from '@widgets/Playground';
import { OutputConsole } from '@widgets/OutputConsole';
import { ExecuteCode } from '@features/ExecuteCode';
import { CODE_TEMPLATE } from './RoomPage.constants';
import { Layout } from './RoomPage.styles';

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
