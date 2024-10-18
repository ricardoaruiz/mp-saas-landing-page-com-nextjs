import { Text } from '@/components';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { CheckListProps } from './types';

export const CheckList = ({
  className,
  type = 'bigAndRightCheck',
  items,
  ...props
}: CheckListProps) => {
  if (type === 'bigAndRightCheck') {
    return (
      <ul className={cn('space-y-10', className)} {...props}>
        {items.map((item, index) => (
          <li className="flex items-center justify-between gap-8" key={index}>
            <Text className="text-3xl">{item}</Text>
            <Check className="text-green-600" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Check className="text-green-600" size={16} />
          {item}
        </li>
      ))}
    </ul>
  );
};
