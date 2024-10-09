/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 38992d5f863fbbcd342c7bb71eff947046cfc6d5
import { InputWrapper, SearchIcon, Input } from './styled';
import useStudentsInfoContext from '../../hooks/useStudentsInfoContext';

export default function SearchInput() {
<<<<<<< HEAD
  const { data, resultSearch } = useStudentsInfoContext();
  const arrayTeste = [
    { nome: 'Pedro', email: 'pedro_alv12@hotmail.com', idade: 28 },
    { nome: 'Julio', email: 'julio_silva@hotmail.com', idade: 30 },
  ];
=======
  const [searchValue, setSearchValue] = useState(null);
  const { data, loading, error } = useStudentsInfoContext();
>>>>>>> 38992d5f863fbbcd342c7bb71eff947046cfc6d5

  const searching = (event) => {
    const searchValue = event.target.value;
    arrayTeste.map((value) => {
      for (const key in value) {
        const vouf = value[key].match(searchValue);

        if (vouf) {
          resultSearch.push(value);
          return;
        }
      }
    });
    // if (searchValue === undefined || searchValue === null) return;
  };

  return (
    <div>
      <InputWrapper>
        <SearchIcon size={20} />{' '}
        <Input
          placeholder="Search"
          type="search"
          onChange={(e) => searching(e)}
        />
      </InputWrapper>
    </div>
  );
}
