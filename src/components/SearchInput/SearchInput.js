/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputWrapper, SearchIcon, Input } from './styled';
import useStudentsInfoContext from '../../hooks/useStudentsInfoContext';

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState(null);
  const { data, loading, error } = useStudentsInfoContext();

  const monstrandoValor = (event) => {
    setSearchValue(event.target.value);

    // if (searchValue === undefined || searchValue === null) return;
  };

  return (
    <div>
      <InputWrapper>
        <SearchIcon size={20} />{' '}
        <Input
          placeholder="Search"
          type="search"
          onChange={(e) => monstrandoValor(e)}
        />
      </InputWrapper>
    </div>
  );
}
