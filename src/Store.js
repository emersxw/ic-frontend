import React, { useState, createContext } from 'react';

export const State = createContext({
  token: localStorage.token,
  message: 'kkk eae men',
  loading: false
});

function Store({ children }) {
  const [state, setState] = useState({
    token: localStorage.token,
    message: 'kkk eae men',
    loading: false
  });

  return <State.Provider value={[state, setState]}>{children}</State.Provider>;
}

export default Store;
