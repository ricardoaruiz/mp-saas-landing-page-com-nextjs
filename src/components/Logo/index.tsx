import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from './types';

export const Logo = ({ className, href, ...props }: LogoProps) => {
  return (
    <Link href={href ?? '#'} className={className} {...props}>
      <Image src="/assets/images/logo.svg" alt="logo" width={129} height={40} />
    </Link>
  );
};
