import { Header, Logo, Navbar, Title } from '@/components';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import Image from 'next/image';
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

      {/* Main */}
      <main>
        {/* Primeira Seção */}
        <section className="main-container-center py-36" id="top">
          <div className="flex flex-col items-center">
            <Title className="mb-2">Simplifique Seus Estudos</Title>

            <p className="mb-16 w-full max-w-[830px] text-center text-xl/9 text-gray-500">
              Deixe que nós fazermos a curadoria para você. Assine nossa
              plataforma e receba todos os meses um ebook novo de programação.
            </p>

            <form className="flex w-full items-center justify-center gap-3">
              <Input
                type="text"
                placeholder="Coloque seu email"
                className="max-w-sm shadow-md"
              />
              <Button>Assine Agora</Button>
            </form>
            <p className="text-xs/9 text-muted-foreground">
              Comece sua assinatura agora mesmo. Cancele quando quiser.
            </p>
          </div>
        </section>

        {/* Segunda Seção */}
        <section className="bg-white py-28" id="funcionamento">
          <div className="main-container-center">
            <Title as="h2">Como funciona?</Title>

            <div className="flex items-center justify-between gap-16">
              <Image
                src="/assets/images/woman.svg"
                alt="mulher carregando caixas de e-books"
                width={392}
                height={392}
              />

              <ul className="space-y-10 text-3xl text-muted-foreground">
                <li className="flex items-center justify-between gap-8">
                  <p>Acesso a 1 ebook por mês</p>
                  <Check className="text-green-600" />
                </li>
                <li className="flex items-center justify-between gap-8">
                  <p>Curadoria especial</p>
                  <Check className="text-green-600" />
                </li>
                <li className="flex items-center justify-between gap-8">
                  <p>Cancele quando quiser</p>
                  <Check className="text-green-600" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terceira Seção */}
        <section className="main-container-center py-28" id="preco">
          <Title as="h2" className="mb-8">
            Preço Simples e Transparente
          </Title>

          <p className="max-w-[827px] text-center text-xl/9 text-muted-foreground">
            Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
            para você?
          </p>
          <p className="max-w-[827px] text-center text-xl/9 text-muted-foreground">
            Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um
            ebook novo de programação. E por menos de um café por dia.
          </p>

          <Card className="mt-20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Plano Pro Premium VIP
              </CardTitle>
              <CardDescription className="text-xs text-muted-foreground">
                Tudo que você precisa para seus estudos
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="mb-4 text-2xl font-bold">
                R$29
                <span className="text-muted-foreground">/mês</span>
              </p>

              <ul>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-green-600" size={16} />1 ebbok por mês
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-green-600" size={16} />
                  Curadoria especial
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-green-600" size={16} />
                  Acesso ilimitado
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="text-green-600" size={16} />
                  Cancele a qualquer momento
                </li>
              </ul>
            </CardContent>

            <CardFooter>
              <Button size="full" className="py-3">
                Assine Agora
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Quarta Seção */}
        <section className="bg-white py-12">
          <div className="main-container-center">
            <Title as="h2" className="mb-2">
              Pronto Para Mudar Sua Vida?
            </Title>
            <p className="max-w-[633px] text-center text-xl/9 text-muted-foreground">
              Faça como milhares de outras pessoas. Assine nosso produto e tenha
              garantido seus estudos{' '}
            </p>

            <Button className="mb-4 mt-11 w-full max-w-[422px]">
              Assine Agora
            </Button>

            <p className="text-xs text-muted-foreground">
              Comece sua assinatura agora mesmo. Cancele quando quiser.{' '}
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-white py-12">
        <div className="main-container-center">
          <div>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={129}
              height={40}
            />
          </div>

          <p className="text-xs text-muted-foreground">
            © 2024 LivroSaaS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
