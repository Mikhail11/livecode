import { useState } from 'react';

import { Editor } from '@widgets/Editor';
import { Playground } from '@widgets/Playground';
import { Grid } from '@ui/Grid';

import { Header, Footer, Layout, Wrapper } from './RoomPage.styles';

import { CODE_TEMPLATE } from './constants';

export const RoomPage = () => {
  const [code, setCode] = useState<string>(CODE_TEMPLATE);

  return (
    <Layout>
      <Header></Header>
      <Wrapper container spacing={0}>
        <Grid size={6}>
          <Editor defaultCode={CODE_TEMPLATE} onChange={setCode} />
        </Grid>
        <Grid size={6}>
          <Playground code={code} />
        </Grid>
      </Wrapper>
      <Footer></Footer>
    </Layout>
  );
};
