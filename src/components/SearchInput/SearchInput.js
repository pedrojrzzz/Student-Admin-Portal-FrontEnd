/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */

import React, { useContext } from 'react';
import { InputWrapper, SearchIcon, Input } from './styled';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';

export default function SearchInput() {
  const {
    listToBeDisplayed,
    setListToBeDisplayed,
    originalList,
    setListIsEmpty,
  } = useContext(SearchAndFilterContext);

  function convertToStringExceptObjects(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));

    if (Array.isArray(newObj)) {
      for (let i = 0; i < newObj.length; i++) {
        for (let key in newObj[i]) {
          if (newObj[i].hasOwnProperty(key)) {
            if (key === 'id') continue;
            if (key === 'status') continue;
            if (typeof newObj[i][key] !== 'object' || newObj[i][key] === null) {
              newObj[i][key] = String(newObj[i][key]);
            }
          }
        }
      }
    } else {
      for (let key in newObj) {
        if (newObj.hasOwnProperty(key)) {
          if (typeof newObj[key] !== 'object' || newObj[key] === null) {
            newObj[key] = String(newObj[key]); // Converte para string
          }
        }
      }
    }
    return newObj;
  }

  const searching = (event) => {
    const searchValue = event.target.value;
    const alreadySearch = [];
    const result = [];

    const objString = convertToStringExceptObjects(listToBeDisplayed);

    setListIsEmpty(false);

    if (searchValue.length === 0) {
      setListToBeDisplayed(originalList);
      return;
    }

    if (objString === null) return;
    objString.map((item, index) => {
      Object.keys(item).forEach((key) => {
        if (key === 'id' || key === 'Fotos' || key === 'status') return; // Não checar chave id,Fotos e status, não necessário
        if (alreadySearch.includes(index)) return; // Se aluno já estiver incluido no resultado, não incluir novamente.
        if (item[key].includes(searchValue)) {
          result.push(item);
          alreadySearch.push(index);
        }
      });
    });
    if (result.length > 0) {
      setListToBeDisplayed(result);
      setListIsEmpty(false);
    } else {
      setListToBeDisplayed(result);
      setListIsEmpty(true);
    }
  };

  return (
    <div>
      <InputWrapper>
        <SearchIcon size={20} />{' '}
        <Input
          placeholder="Search"
          type="search"
          onChange={(e) => searching(e)}
          onK
          on
        />
      </InputWrapper>
    </div>
  );
}
