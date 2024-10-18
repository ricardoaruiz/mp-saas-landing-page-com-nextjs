'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer';
import { HeaderProps } from './types';

export const Header = ({ className, ...props }: HeaderProps) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((state) => !state);
  };

  return (
    <header
      className={cn(
        'fixed -top-10 left-1/2 z-20 mt-10 flex h-[70px] w-full -translate-x-1/2 items-center bg-violet-100 shadow-md md:h-[100px]',
        className
      )}
      {...props}
    >
      <Navbar.Root>
        <Logo href="#section1" />

        <div className="block md:hidden">
          <Drawer open={isMobileMenuOpened} direction="left">
            <DrawerTrigger onClick={toggleMobileMenu}>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <div className="flex items-center justify-between">
                  <DrawerTitle>
                    <Logo />
                  </DrawerTitle>
                  <Button variant="outline" onClick={toggleMobileMenu}>
                    <X />
                  </Button>
                </div>
              </DrawerHeader>

              <Navbar.ItemsContainer className="flex flex-col gap-4">
                <Button variant="link" asChild onClick={toggleMobileMenu}>
                  <Link href="#section2">Funcionamento</Link>
                </Button>
                <Button variant="link" asChild onClick={toggleMobileMenu}>
                  <Link href="#section3">Preço</Link>
                </Button>
                <Button variant="outline" onClick={toggleMobileMenu}>
                  Login
                </Button>
              </Navbar.ItemsContainer>
            </DrawerContent>
          </Drawer>
        </div>

        <Navbar.ItemsContainer className="hidden md:block">
          <Button variant="link" asChild>
            <Link href="#section2">Funcionamento</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#section3">Preço</Link>
          </Button>
          <Button variant="outline">Login</Button>
        </Navbar.ItemsContainer>
      </Navbar.Root>
    </header>
  );
};
