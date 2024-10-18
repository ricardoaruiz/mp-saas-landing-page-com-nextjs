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
      <ul className={cn('space-y-5 md:space-y-10', className)} {...props}>
        {items.map((item, index) => (
          <li
            className="flex items-center justify-end gap-2 md:gap-4 lg:gap-8"
            key={index}
          >
            <Text className="text-xs md:text-xl lg:text-3xl">{item}</Text>
            <Check className="text-green-600" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={(cn('space-y-1'), className)} {...props}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Check className="text-green-600" size={16} />
          <Text className="text-xs md:text-sm">{item}</Text>
        </li>
      ))}
    </ul>
  );
};
