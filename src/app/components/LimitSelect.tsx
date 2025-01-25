'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export function LimitSelect() {
  const pathname = usePathname();
  const router = useRouter();

  const params = useSearchParams();
  const options = [10, 25, 50, 100];

  const limit = (() => {
    const paramsLimit = Number(params.get('limit') || 10);
    if (!options.includes(paramsLimit)) return 10;
    return paramsLimit;
  })();

  function selectPageLimit(value: string) {
    const newParams = new URLSearchParams(Array.from(params.entries()));
    newParams.set('limit', value);

    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <Select onValueChange={selectPageLimit}>
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
