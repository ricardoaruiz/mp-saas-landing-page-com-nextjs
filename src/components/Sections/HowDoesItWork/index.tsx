import { CheckList, Text } from '@/components';
import { data } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HowDoesItWorkProps } from './types';

export const HowDoesItWork = ({ className, ...props }: HowDoesItWorkProps) => {
  return (
    <section className={cn('bg-white py-14 md:py-28', className)} {...props}>
      <div className="main-container-center">
        <Text as="h2" className="mb-8 md:mb-0">
          {data.sections.howDoesItWork.title}
        </Text>

        <div className="flex items-center justify-center gap-1 md:justify-between md:gap-16">
          <div className="relative h-[130px] w-[130px] md:h-[392px] md:w-[392px]">
            <Image
              src="/assets/images/woman.svg"
              alt="mulher carregando caixas de e-books"
              fill
              className="h-full w-full flex-shrink-0 object-contain"
            />
          </div>

          <CheckList
            items={data.sections.howDoesItWork.checklist}
            type="bigAndRightCheck"
          />
        </div>
      </div>
    </section>
  );
};
