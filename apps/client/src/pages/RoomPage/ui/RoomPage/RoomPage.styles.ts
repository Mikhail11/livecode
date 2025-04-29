import styled from 'styled-components';

import { Grid } from '@ui/Grid';
//TODO: вынести цвета в тему
const COLOR = '#1e1e1e';
const BORDER_COLOR = '#cecece';

export const Header = styled.header`
  width: 100%;
  height: 80px;
  box-sizing: border-box;

  padding: 8px 16px;

  background-color: ${COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
`;

export const Footer = styled.footer`
  width: 100%;
  height: 80px;
  box-sizing: border-box;

  padding: 8px 16px;

  background-color: ${COLOR};
  border-top: 1px solid ${BORDER_COLOR};
`;

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

export const Wrapper = styled(Grid)`
  flex-grow: 1;
`;
