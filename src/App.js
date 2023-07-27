import Profile from "./components/Profile";
import TransactionHistory from "./components/TransactionHistory";
import user from './user.json';
import transactions from './transactions.json'

export default function App() {
  return (
    <>
      <Profile user={user} />
      <TransactionHistory items={transactions} />
    </>
  );
}