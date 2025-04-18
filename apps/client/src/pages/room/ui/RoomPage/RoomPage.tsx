import { Layout } from './RoomPage.styles';
import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';
import { OutputConsole } from '@widgets/OutputConsole/ui/OutputConsole/OutputConsole';
import { ExecuteCode } from '@features/ExecuteCode';

export const RoomPage = () => {
  return (
    <Layout>
      <Editor />
      {/* <Playground code={code} /> */}
      <OutputConsole />

      <ExecuteCode />
    </Layout>
  );
};
