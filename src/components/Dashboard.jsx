import { useAppContext } from '../hooks/useAppContext';

const Dashboard = () => {
  const { state } = useAppContext();
  console.log(state);
  return (
    <div>
      <h1>Hi there, {state.name}</h1>
      <a href='/pipeline'>Pipeline</a>
    </div>
  );
};

export default Dashboard;
