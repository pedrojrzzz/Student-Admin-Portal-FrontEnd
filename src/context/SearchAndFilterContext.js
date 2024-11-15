/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const SearchAndFilterContext = createContext(null);

export function SearchAndFilterContextProvider({ children }) {
  const { data } = useSelector((state) => state.alunos);
  const [listToBeDisplayed, setListToBeDisplayed] = useState([]);
  const originalList = data;
  return (
    <SearchAndFilterContext.Provider
      value={{
        listToBeDisplayed,
        setListToBeDisplayed,
        originalList,
      }}
    >
      {children}
    </SearchAndFilterContext.Provider>
  );
}

export default { SearchAndFilterContext, SearchAndFilterContextProvider };
