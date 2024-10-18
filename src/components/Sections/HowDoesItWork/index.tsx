import { CheckList, Text } from '@/components';
import { data } from '@/constants';
import Image from 'next/image';

export const HowDoesItWork = () => {
  return (
    <section className="bg-white py-28" id="funcionamento">
      <div className="main-container-center">
        <Text as="h2">{data.sections.howDoesItWork.title}</Text>

        <div className="flex items-center justify-between gap-16">
          <Image
            src="/assets/images/woman.svg"
            alt="mulher carregando caixas de e-books"
            width={392}
            height={392}
          />

          <CheckList
            items={data.sections.howDoesItWork.checklist}
            type="bigAndRightCheck"
          />
        </div>
      </div>
    </section>
  );
};
