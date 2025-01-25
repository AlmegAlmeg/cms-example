'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSetQuery } from '@/hooks/use-set-query';
import { useSearchParams } from 'next/navigation';

export function LimitSelect() {
  const { pushRoute } = useSetQuery();
  const params = useSearchParams();
  const options = [10, 25, 50, 100];

  const limit = (() => {
    const paramsLimit = Number(params.get('limit') || 10);
    if (!options.includes(paramsLimit)) return 10;
    return paramsLimit;
  })();

  function selectPageLimit(value: string) {
    pushRoute('limit', value);
  }

  return (
    <Select onValueChange={selectPageLimit} value={limit.toString()}>
      <SelectTrigger className="w-[70px]">
        <SelectValue defaultValue={limit} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
