import { Button, Text } from '@/components';
import { data } from '@/constants';
import { cn } from '@/lib/utils';
import { ReadyToChangeYourLifeProps } from './types';
export const ReadyToChangeYourLive = ({
  className,
  ...props
}: ReadyToChangeYourLifeProps) => {
  return (
    <section className={cn('bg-white py-12', className)} {...props}>
      <div className="main-container-center">
        <Text as="h2" className="mb-2" align="center">
          {data.sections.readyToChangeYourLive.title}
        </Text>
        <Text className="max-w-[350px] text-xl md:max-w-[633px]" align="center">
          {data.sections.readyToChangeYourLive.description}
        </Text>

        <Button className="mb-4 mt-11 w-full max-w-[422px]">
          {data.sections.readyToChangeYourLive.buttonLabel}
        </Button>

        <Text className="text-[10px] md:text-xs" align="center">
          {data.sections.readyToChangeYourLive.disclamer}
        </Text>
      </div>
    </section>
  );
};
