import { VariantProps } from 'class-variance-authority';
import { textVariants } from './styles';

export type TextProps = VariantProps<typeof textVariants> &
  (
    | React.HTMLAttributes<HTMLHeadElement>
    | React.HTMLAttributes<HTMLParagraphElement>
    | React.HTMLAttributes<HTMLSpanElement>
  );
