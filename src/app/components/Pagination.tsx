'use client';

import {
  Pagination as AppPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useSetQuery } from '@/hooks/use-set-query';
import { useSearchParams } from 'next/navigation';

export function Pagination({ pages }: { pages: number }) {
  const params = useSearchParams();
  const { pushRoute } = useSetQuery();
  const page = Number(params.get('page') || 1);

  if (pages === 1) return null;

  return (
    <AppPagination className="justify-end">
      <PaginationContent>
        {page > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => pushRoute('page', page - 1)} />
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => pushRoute('page', page - 1)}>{page - 1}</PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem className="cursor-pointer">
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {page < pages && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={() => pushRoute('page', page + 1)}>{page + 1}</PaginationLink>
          </PaginationItem>
        )}

        {page < pages && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={() => pushRoute('page', page + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </AppPagination>
  );
}
