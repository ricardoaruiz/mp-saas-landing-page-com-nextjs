import { CheckList, Text } from '@/components';
import { data } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HowDoesItWorkProps } from './types';

export const HowDoesItWork = ({ className, ...props }: HowDoesItWorkProps) => {
  return (
    <section className={cn('bg-white py-28', className)} {...props}>
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
