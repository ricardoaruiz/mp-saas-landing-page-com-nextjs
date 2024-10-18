import { ComponentProps } from 'react';

export type CheckListProps = ComponentProps<'ul'> & {
  items: string[];
  type: 'bigAndRightCheck' | 'smallAndLefttCheck';
};
