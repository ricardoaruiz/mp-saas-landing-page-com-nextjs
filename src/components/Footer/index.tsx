import { Logo, Text } from '@/components';

export const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="main-container-center">
        <Logo href="#top" />

        <Text className="text-xs">
          © 2024 LivroSaaS. Todos os direitos reservados.
        </Text>
      </div>
    </footer>
  );
};
