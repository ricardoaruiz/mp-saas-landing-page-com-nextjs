import { cva } from 'class-variance-authority';

export const titleVariants = cva('font-bold text-black', {
  variants: {
    as: {
      h1: 'text-6xl/loose ',
      h2: 'text-5xl/loose',
      h3: 'text-4xl/loose',
      h4: 'text-3xl/loose',
      h5: 'text-2xl/loose',
      h6: 'text-xl/loose'
    }
  },
  defaultVariants: {
    as: 'h1'
  }
});
