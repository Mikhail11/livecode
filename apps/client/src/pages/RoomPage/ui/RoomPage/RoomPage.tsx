import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';
import { usePersistState } from '@shared/hooks';
import { Grid } from '@ui';

import { Header, Footer, Layout, Wrapper } from './RoomPage.styles';

import { CODE_TEMPLATE } from './RoomPage.constants';

export const RoomPage = () => {
  const [code, setCode] = usePersistState<string>(CODE_TEMPLATE);

  return (
    <Layout>
      <Header></Header>
      <Wrapper container spacing={0}>
        <Grid size={6}>
          <Editor defaultCode={code} onChange={setCode} />
        </Grid>
        <Grid size={6}>
          <Playground code={code} />
        </Grid>
      </Wrapper>
      <Footer></Footer>
    </Layout>
  );
};
