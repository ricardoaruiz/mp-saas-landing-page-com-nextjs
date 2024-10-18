import { Button, Footer, Header, Logo, Navbar, Sections } from '@/components';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header>
        <Navbar.Root>
          <Logo href="#section1" />

          <Navbar.ItemsContainer>
            <Button variant="link" asChild>
              <Link href="#section2">Funcionamento</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#section3">Preço</Link>
            </Button>
            <Button variant="outline">Login</Button>
          </Navbar.ItemsContainer>
        </Navbar.Root>
      </Header>

      <main>
        <Sections.SimplifyYourStudies id="section1" />
        <Sections.HowDoesItWork id="section2" />
        <Sections.Price id="section3" />
        <Sections.ReadyToChangeYourLive />
      </main>

      <Footer />
    </>
  );
}
