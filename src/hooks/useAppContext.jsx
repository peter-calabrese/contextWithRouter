import { useContext, createContext, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children, initialValues }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
