import { ReactElement } from 'react';
import MUICircularProgress from '@mui/material/CircularProgress';

import { TSpinnerProps } from './Spinner.interfaces';

const Spinner = (props: TSpinnerProps): ReactElement => <MUICircularProgress {...props} />;

export default Spinner;
