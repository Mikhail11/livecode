import { ReactElement } from 'react';
import MUIGrid from '@mui/material/Grid2';

import { IGridProps } from './Grid.interfces';

const Grid = (props: IGridProps): ReactElement => <MUIGrid {...props} />;

export default Grid;
