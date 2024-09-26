import React, { useState } from 'react';
import { InputWrapper, SearchIcon, Input } from './styled';

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState(null);

  const monstrandoValor = (event) => {
    setSearchValue(event.target.value);

    // if (searchValue === undefined || searchValue === null) return;

    return searchValue;
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
