'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { GlobalDataTable } from '../components/GlobalDataTable';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { Plus } from 'lucide-react';
import { Pagination } from '../components/Pagination';
import { Select } from '@/components/ui/select';
import { LimitSelect } from '../components/LimitSelect';

interface UsersDataTableProps<TValue> {
  columns: ColumnDef<User, TValue>[];
  data: User[];
  pages: number;
}

export function UsersDataTable<TValue>({ columns, data, pages }: UsersDataTableProps<TValue>) {
  const searchRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchRef.current || !searchRef.current.value) return;
  }

  return (
    <div className="grid gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <form className="flex gap-4" onSubmit={onSubmit}>
            <Input placeholder="חיפוש לפי שם, טלפון, דוא״ל" className="w-60" ref={searchRef} />
            <Button type="submit" variant="default">
              חיפוש
            </Button>
          </form>
          <LimitSelect />
        </div>

        <div className="flex gap-4">
          <Button variant="outline">ייצוא</Button>
          <Button variant="default">
            הוספת משתמש
            <Plus size={10} />
          </Button>
        </div>
      </div>

      <GlobalDataTable columns={columns} data={data} />

      <Pagination pages={pages} />
    </div>
  );
}
