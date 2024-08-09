import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import AddTransactions from '@/components/AddTransaction';
import Balance from '@/components/Balance';

const HomePage = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <AddTransactions />
    </main>
  );
};

export default HomePage;
