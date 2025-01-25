import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useSetQuery() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  function pushRoute(key: string, value: string | number) {
    const newParams = new URLSearchParams(Array.from(params.entries()));
    newParams.set(key, value.toString());

    router.push(`${pathname}?${newParams.toString()}`);
  }

  return { pushRoute };
}
