import { Header, Logo, Navbar, Text } from '@/components';
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
        <section className="main-container-center pb-16 pt-36" id="top">
          <Text as="h1" className="mb-2">
            Simplifique Seus Estudos
          </Text>

          <Text className="mb-16 w-full max-w-[830px]" align="center">
            Deixe que nós fazermos a curadoria para você. Assine nossa
            plataforma e receba todos os meses um ebook novo de programação.
          </Text>

          <form className="flex w-full items-center justify-center gap-3">
            <Input
              type="text"
              placeholder="Coloque seu email"
              className="max-w-sm shadow-md"
            />
            <Button>Assine Agora</Button>
          </form>
          <Text className="text-xs/9">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </Text>
        </section>

        {/* Segunda Seção */}
        <section className="bg-white py-28" id="funcionamento">
          <div className="main-container-center">
            <Text as="h2">Como funciona?</Text>

            <div className="flex items-center justify-between gap-16">
              <Image
                src="/assets/images/woman.svg"
                alt="mulher carregando caixas de e-books"
                width={392}
                height={392}
              />

              <ul className="space-y-10">
                <li className="flex items-center justify-between gap-8">
                  <Text className="text-3xl">Acesso a 1 ebook por mês</Text>
                  <Check className="text-green-600" />
                </li>
                <li className="flex items-center justify-between gap-8">
                  <Text className="text-3xl">Curadoria especial</Text>
                  <Check className="text-green-600" />
                </li>
                <li className="flex items-center justify-between gap-8">
                  <Text className="text-3xl">Cancele quando quiser</Text>
                  <Check className="text-green-600" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Terceira Seção */}
        <section className="main-container-center py-28" id="preco">
          <Text as="h2" className="mb-8">
            Preço Simples e Transparente
          </Text>

          <Text className="max-w-[827px]">
            Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
            para você?
          </Text>
          <Text className="max-w-[827px]" align="center">
            Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um
            ebook novo de programação. E por menos de um café por dia.
          </Text>

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
              <Text className="mb-4 text-2xl font-bold">
                R$29
                <Text as="span">/mês</Text>
              </Text>

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
            <Text as="h2" className="mb-2">
              Pronto Para Mudar Sua Vida?
            </Text>
            <Text className="max-w-[633px]" align="center">
              Faça como milhares de outras pessoas. Assine nosso produto e tenha
              garantido seus estudos{' '}
            </Text>

            <Button className="mb-4 mt-11 w-full max-w-[422px]">
              Assine Agora
            </Button>

            <Text className="text-xs">
              Comece sua assinatura agora mesmo. Cancele quando quiser.{' '}
            </Text>
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

          <Text className="text-xs">
            © 2024 LivroSaaS. Todos os direitos reservados.
          </Text>
        </div>
      </footer>
    </>
  );
}
