import { Button, Text } from '@/components';
import { data } from '@/constants';
export const ReadyToChangeYourLive = () => {
  return (
    <section className="bg-white py-12">
      <div className="main-container-center">
        <Text as="h2" className="mb-2">
          {data.sections.readyToChangeYourLive.title}
        </Text>
        <Text className="max-w-[633px]" align="center">
          {data.sections.readyToChangeYourLive.description}
        </Text>

        <Button className="mb-4 mt-11 w-full max-w-[422px]">
          {data.sections.readyToChangeYourLive.buttonLabel}
        </Button>

        <Text className="text-xs">
          {data.sections.readyToChangeYourLive.disclamer}
        </Text>
      </div>
    </section>
  );
};
