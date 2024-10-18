import { Button, Input, Text } from '@/components';
import { data } from '@/constants';
import { cn } from '@/lib/utils';
import { SimplifyYourStudiesProps } from './types';

export const SimplifyYourStudies = ({
  className,
  ...props
}: SimplifyYourStudiesProps) => {
  return (
    <section
      className={cn('main-container-center pb-16 pt-36', className)}
      {...props}
    >
      <Text as="h1" className="mb-2">
        {data.sections.simplifyYourStudies.title}
      </Text>

      <Text className="mb-16 w-full max-w-[830px]" align="center">
        {data.sections.simplifyYourStudies.description}
      </Text>

      <form className="flex w-full items-center justify-center gap-3">
        <Input
          type="text"
          placeholder={data.sections.simplifyYourStudies.placeholderInput}
          className="max-w-sm shadow-md"
        />
        <Button>{data.sections.simplifyYourStudies.buttonLabel}</Button>
      </form>
      <Text className="text-xs/9">
        {data.sections.simplifyYourStudies.diclamer}
      </Text>
    </section>
  );
};
