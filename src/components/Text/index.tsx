import { cn } from '@/lib/utils';
import { textVariants } from './styles';
import { TextProps } from './types';

export const Text = ({
  children,
  as = 'p',
  align = 'left',
  className,
  ...props
}: TextProps) => {
  const Comp = as ?? 'p';
  return (
    <Comp className={cn(textVariants({ as, align, className }))} {...props}>
      {children}
    </Comp>
  );
};
