import { cn } from '@/lib/utils';
import { ItemsContainerProps } from './types';

export const ItemsContainer = ({
  className,
  ...props
}: ItemsContainerProps) => {
  return <div className={cn('space-x-2', className)} {...props} />;
};
