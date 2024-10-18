import { Footer, Header, Logo, Navbar, Sections } from '@/components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header>
        <Navbar.Root>
          <Logo href="#top" />

          <Navbar.ItemsContainer>
            <Button variant="link" asChild>
              <Link href="#funcionamento">Funcionamento</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="#preco">Preço</Link>
            </Button>
            <Button variant="outline">Login</Button>
          </Navbar.ItemsContainer>
        </Navbar.Root>
      </Header>

      <main>
        <Sections.SimplifyYourStudies />
        <Sections.HowDoesItWork />
        <Sections.Price />
        <Sections.ReadyToChangeYourLive />
      </main>

      <Footer />
    </>
  );
}
