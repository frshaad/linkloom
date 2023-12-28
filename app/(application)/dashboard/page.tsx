import { auth } from '@/lib/auth';

// type Props = {
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

export default async function DashboardPage() {
  const session = await auth();

  return <div>DashboardPage: {session?.user?.name}</div>;
}
