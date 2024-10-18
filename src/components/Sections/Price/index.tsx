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

export const Price = () => {
  return (
    <section className="main-container-center py-28" id="preco">
      <Text as="h2" className="mb-8">
        {data.sections.price.title}
      </Text>

      <Text className="max-w-[827px]">{data.sections.price.description1}</Text>
      <Text className="max-w-[827px]" align="center">
        {data.sections.price.description2}
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
          <Text className="mb-4 text-2xl font-bold">
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
