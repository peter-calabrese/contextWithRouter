import { useAppContext } from '../hooks/useAppContext';

const Dashboard = () => {
  const { state } = useAppContext();
  return (
    <div>
      <h1>Hi there, {state.name}</h1>
      <button onClick={() => window.open('/pipeline')}>Pipeline</button>
    </div>
  );
};

export default Dashboard;
