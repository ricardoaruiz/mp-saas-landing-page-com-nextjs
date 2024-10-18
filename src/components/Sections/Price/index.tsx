import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CheckList,
  Text
} from '@/components';
import { data } from '@/constants';
import { cn } from '@/lib/utils';
import { PriceProps } from './types';

export const Price = ({ className, ...props }: PriceProps) => {
  return (
    <section
      className={cn('main-container-center py-20 md:py-28', className)}
      {...props}
    >
      <Text as="h2" className="mb-8" align="center">
        {data.sections.price.title}
      </Text>

      <Text className="max-w-[320px] md:max-w-[820px]" align="center">
        {data.sections.price.description1} {data.sections.price.description2}
      </Text>

      <Card className="mt-20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {data.sections.price.card.title}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {data.sections.price.card.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Text className="mb-4 text-2xl font-bold text-black">
            {data.sections.price.card.price}
            <Text as="span">{data.sections.price.card.frequency}</Text>
          </Text>

          <CheckList
            items={data.sections.price.card.checkList}
            type="smallAndLefttCheck"
          />
        </CardContent>

        <CardFooter>
          <Button size="full" className="py-3">
            {data.sections.price.card.buttonLabel}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
