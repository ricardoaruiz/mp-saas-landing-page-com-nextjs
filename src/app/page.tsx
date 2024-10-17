import Image from 'next/image';

export default function Home() {
  return (
    <main className="py-12">
      {/* Primeira Seção */}
      <section className="container mx-auto">
        <nav className="mb-20 flex items-center justify-between">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={129}
            height={40}
          />

          <div className="space-x-6">
            <button>Funcionamento</button>
            <button>Preço</button>
            <button>Login</button>
          </div>
        </nav>

        <h1>Simplifique Seus Estudos</h1>
        <p>
          Deixe que nós fazermos a curadoria para você. Assine nossa plataforma
          e receba todos os meses um ebook novo de programação.
        </p>

        <form>
          <input type="text" placeholder="Coloque seu email" />
          <button>Assine Agora</button>
        </form>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
      </section>

      {/* Segunda Seção */}
      <section className="bg-white">
        <h2>Como funciona?</h2>

        <div>
          <Image
            src="/assets/images/woman.svg"
            alt="mulher carregando caixas de e-books"
            width={392}
            height={392}
          />
          <ul>
            <li>Acesso a 1 ebook por mês</li>
            <li>Curadoria especial</li>
            <li>Cancele quando quiser</li>
          </ul>
        </div>
      </section>

      {/* Terceira Seção */}
      <section>
        <h2>Preço Simples e Transparente</h2>
        <p>
          Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
          para você? Assine o nosso plano mensal Pro Premium VIP e garanta
          mensalmente um ebook novo de programação. E por menos de um café por
          dia.
        </p>

        <article>
          <div>
            <h3>Plano Pro Premium VIP</h3>
            <p>Tudo que você precisa para seus estudos</p>
          </div>

          <section>
            <p>R$29/mês</p>

            <ul>
              <li>1 ebbok por mês</li>
              <li>Curadoria especial</li>
              <li>Acesso ilimitado</li>
              <li>Cancele a qualquer momento</li>
            </ul>
          </section>

          <button>Assine Agora</button>
        </article>
      </section>

      {/* Quarta Seção */}
      <section className="bg-white">
        <h2>Pronto Para Mudar Sua Vida?</h2>
        <p>
          Faça como milhares de outras pessoas. Assine nosso produto e tenha
          garantido seus estudos{' '}
        </p>

        <button>Assine Agora</button>

        <p>Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
      </section>

      {/* Rodapé */}
      <footer>
        <div>
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={129}
            height={40}
          />
          <p>LivroSaaS</p>
        </div>
        <p>© 2024 LivroSaaS. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
