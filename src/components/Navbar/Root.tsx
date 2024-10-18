import { cn } from '@/lib/utils';
import { NavbarProps as RootProps } from './types';

export const Root = ({ className, ...props }: RootProps) => {
  return (
    <nav
      className={cn(
        'main-container flex flex-1 items-center justify-between',
        className
      )}
      {...props}
    />
  );
};
