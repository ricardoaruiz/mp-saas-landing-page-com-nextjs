import { VariantProps } from 'class-variance-authority';
import { titleVariants } from './styles';

export type TitleProps = VariantProps<typeof titleVariants> &
  React.HTMLAttributes<HTMLHeadElement>;
