import { ReactNode } from 'react';
import { GridOwnProps, GridSize } from '@mui/material/Grid';

type TMUIGridPickedProps = Pick<GridOwnProps, 'container' | 'spacing'>;

export interface IGridProps extends TMUIGridPickedProps {
  className?: string;
  children: ReactNode;
  size?: GridSize;
}
