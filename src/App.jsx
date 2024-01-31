import { Link } from 'react-router-dom';
import './App.css';
import { useAppContext } from './hooks/useAppContext';

function App() {
  const { state, dispatch } = useAppContext();
  const onInput = (e) => {
    dispatch({
      type: 'ADD_ITEM',
      key: 'name',
      value: e.target.value,
    });

    console.log(state.name);
  };
  return (
    <>
      <h1>App</h1>
      <input value={state.name} onChange={onInput} />
      <Link to='/dashboard'>Dash</Link>
    </>
  );
}

export default App;
