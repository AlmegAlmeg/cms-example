import { getUsers } from '@/server/users';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
  const { data, success } = await getUsers();
  if (!success) redirect('/');

  return (
    <div>
      <h1>כל המשתמשים</h1>
    </div>
  );
}
