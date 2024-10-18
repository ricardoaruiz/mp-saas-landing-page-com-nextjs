import { cn } from '@/lib/utils';
import { titleVariants } from './styles';
import { TitleProps } from './types';

export const Title = ({
  children,
  as = 'h1',
  className,
  ...props
}: TitleProps) => {
  const Comp = as ?? 'h1';
  return (
    <Comp className={cn(titleVariants({ as, className }))} {...props}>
      {children}
    </Comp>
  );
};
