/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useSelector } from 'react-redux';

export const SearchAndFilterContext = createContext(null);

export function SearchAndFilterContextProvider({ children }) {
  const { data } = useSelector((state) => state.alunos);
  const [listToBeDisplayed, setListToBeDisplayed] = useState([]);
  const [searchedValue, setSearchedValue] = useState(null);
  const [filteredValue, setFilteredValue] = useState(null);
  const [listIsEmpty, setListIsEmpty] = useState(false);
  const originalList = data;
  return (
    <SearchAndFilterContext.Provider
      value={{
        originalList,
        listToBeDisplayed,
        setListToBeDisplayed,
        searchedValue,
        listIsEmpty,
        setListIsEmpty,
        setSearchedValue,
        filteredValue,
        setFilteredValue,
      }}
    >
      {children}
    </SearchAndFilterContext.Provider>
  );
}

export default { SearchAndFilterContext, SearchAndFilterContextProvider };
