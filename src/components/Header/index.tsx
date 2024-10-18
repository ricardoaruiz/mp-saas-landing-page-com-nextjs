import { cn } from '@/lib/utils';
import { HeaderProps } from './types';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        'fixed -top-10 left-1/2 z-20 mt-10 flex h-[70px] w-full -translate-x-1/2 items-center bg-violet-100 shadow-md md:h-[100px]',
        className
      )}
      {...props}
    />
  );
};
