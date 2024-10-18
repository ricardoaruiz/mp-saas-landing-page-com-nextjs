import { cva } from 'class-variance-authority';

export const textVariants = cva('text-base text-black', {
  variants: {
    as: {
      h1: 'text-4xl md:text-6xl/loose font-bold',
      h2: 'text-3xl md:text-5xl/loose font-bold',
      h3: 'text-2xl md:text-4xl/loose font-bold',
      h4: 'text-xl md:text-3xl/loose font-bold',
      h5: 'text-lg md:text-2xl/loose font-bold',
      h6: 'text-base md:text-xl/loose font-bold',
      p: 'text-xs md:text-xl/9 text-muted-foreground',
      span: 'text-muted-foreground'
    },
    align: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
      justify: 'text-justify'
    }
  },
  defaultVariants: {
    as: 'p',
    align: 'left'
  }
});
