'use client';

import { User } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'קוד',
  },
  {
    accessorKey: 'outsideId',
    header: 'קוד לקוח חיצוני',
  },
  {
    accessorKey: 'name',
    header: 'שם',
  },
  {
    accessorKey: 'status',
    header: () => <div className="w-20">סטטוס</div>,
    cell: ({ row }) => {
      const { status } = row.original;
      const classes = 'px-2 py-1 rounded-sm text-xs font-semibold text-center';

      // if (status === 'NORMAL') return <div className={`${classes} `}>רגיל</div>;
      if (status === 'VIP') {
        return <div className={`${classes} bg-blue-200 text-blue-800`}>VIP</div>;
      }
      if (status === 'BLOCKED') {
        return <div className={`${classes} bg-gray-200 text-gray-800`}>חסום</div>;
      }
      if (status === 'SUSPECTED') {
        return <div className={`${classes} bg-yellow-200 text-yellow-800`}>חשוד</div>;
      }

      return <div className={`${classes} bg-slate-200 text-slate-800`}>רגיל</div>;
      // return row.original.status
    },
  },
  {
    accessorKey: 'phone',
    header: 'טלפון',
  },
  {
    accessorKey: 'street',
    cell: ({ row }) => {
      const { street, houseNumber } = row.original;
      return `${street}, ${houseNumber}`;
    },
  },
  {
    accessorKey: 'city',
    header: 'עיר',
  },
  {
    accessorKey: 'email',
    header: 'דוא״ל',
  },
  {
    accessorKey: 'lastOrderDate',
    header: 'קנייה אחרונה',
    cell: ({ row }) => {
      const { lastOrderDate } = row.original;
      return lastOrderDate
        ? new Date(lastOrderDate).toLocaleDateString('us', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        : '';
    },
  },
];
