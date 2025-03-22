import { Editor } from './components/Editor';
import { Playground } from './components/Playground';

import { Layout } from './Page.styles';

export const RoomPage = () => {
  return (
    <Layout>
      <Editor />
      <Playground />
    </Layout>
  );
};
