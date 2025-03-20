import { Editor } from '../Editor';
import { Playground } from '../Playground';

import { Layout } from './Page.styles';

export const RoomPage = () => {
  return (
    <Layout>
      <Editor />
      <Playground />
    </Layout>
  );
};
