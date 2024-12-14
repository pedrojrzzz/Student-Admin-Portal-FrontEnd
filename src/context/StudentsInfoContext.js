/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const StudentsInfoContext = createContext(null);

export function StudentsInfoContextProvider({ children }) {
  const { data, loading, error } = useSelector((state) => state.alunos);
  const [listToBeDisplayed, setListToBeDisplayed] = useState([]);

  const originalList = data;

  return (
    <StudentsInfoContext.Provider
      value={{
        listToBeDisplayed,
        setListToBeDisplayed,
        originalList,
        loading,
        error,
      }}
    >
      {children}
    </StudentsInfoContext.Provider>
  );
}

export default { StudentsInfoContext, StudentsInfoContextProvider };
