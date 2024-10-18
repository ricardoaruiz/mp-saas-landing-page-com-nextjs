import Link from 'next/link';
import { ComponentProps } from 'react';

export type LogoProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  href?: string;
};
