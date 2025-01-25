import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Key = 'page' | 'limit' | 'search';

export function useSetQuery() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  function pushRoute(key: Key, value: string | number) {
    const newParams = new URLSearchParams(Array.from(params.entries()));
    newParams.set(key, value.toString());

    if (value === '') {
      newParams.delete(key);
    }

    if (key === 'search') {
      newParams.set('page', '1');
    }

    router.push(`${pathname}?${newParams.toString()}`);
  }

  return { pushRoute };
}
