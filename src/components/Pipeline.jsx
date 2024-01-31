import { useAppContext } from '../hooks/useAppContext';

const Pipeline = () => {
  const { state } = useAppContext();
  return (
    <div>
      <h1>Pipeline</h1>
      <h1>Hi there, {state}</h1>
    </div>
  );
};
export default Pipeline;
