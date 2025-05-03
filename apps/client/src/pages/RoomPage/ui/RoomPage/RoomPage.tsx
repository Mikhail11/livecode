import { Editor } from '@widgets/Editor';
// import { Playground } from '@widgets/Playground';
import { OutputConsole } from '@widgets/OutputConsole';
import { ExecuteCode } from '@features/ExecuteCode';
import { CODE_TEMPLATE } from './RoomPage.constants';
import { Layout } from './RoomPage.styles';
import { useParams } from 'react-router';
import { NotFoundPage } from '@pages/NotFoundPage';

export const RoomPage = () => {
  const { id } = useParams<'id'>();

  if (!id) {
    return <NotFoundPage />;
  }

  return (
    <Layout>
      <Editor defaultCode={CODE_TEMPLATE} />
      {/* <Playground code={code} /> */}
      <OutputConsole />

      <ExecuteCode />
    </Layout>
  );
};
