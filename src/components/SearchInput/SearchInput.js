/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import React from 'react';
import { InputWrapper, SearchIcon, Input } from './styled';
import useStudentsInfoContext from '../../hooks/useStudentsInfoContext';

export default function SearchInput() {
  const { data, resultSearch } = useStudentsInfoContext();
  const arrayTeste = [
    { nome: 'Pedro', email: 'pedro_alv12@hotmail.com', idade: 28 },
    { nome: 'Julio', email: 'julio_silva@hotmail.com', idade: 30 },
  ];

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
