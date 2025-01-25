import { getUsers } from '@/server/users';
import { redirect } from 'next/navigation';
import { columns } from './columns';
import { UsersDataTable } from './UsersDataTable';

export default async function UsersPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const { data, success, pages } = await getUsers({
    page: params?.page as string,
    limit: params?.limit as string,
  });
  if (!success || !data) redirect('/');

  return (
    <div>
      <h1 className="text-4xl mb-6">כל המשתמשים</h1>
      <UsersDataTable columns={columns} data={data} pages={pages} />
    </div>
  );
}
