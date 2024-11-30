/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { InputWrapper, SearchIcon, Input } from './styled';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';

export default function SearchInput() {
  const { listToBeDisplayed, setListToBeDisplayed, originalList } = useContext(
    SearchAndFilterContext,
  );
  const formerListToBeDisplayed = listToBeDisplayed;

  function convertToStringExceptObjects(obj) {
    let newObj = JSON.parse(JSON.stringify(obj));

    if (Array.isArray(newObj)) {
      for (let i = 0; i < newObj.length; i++) {
        for (let key in newObj[i]) {
          if (newObj[i].hasOwnProperty(key)) {
            if (key === 'id') continue;
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

    if (searchValue.length === 0) {
      setListToBeDisplayed(originalList);
      return;
    }

    if (objString === null) return;
    objString.map((item, index) => {
      Object.keys(item).forEach((key) => {
        if (key === 'id' || key === 'Fotos') return; // Não checar chave id e Fotos, não necessário
        if (alreadySearch.includes(index)) return; // Se aluno já estiver incluido no resultado, não incluir novamente.
        if (item[key].match(searchValue)) {
          result.push(item);
          alreadySearch.push(index);
        }
      });
    });
    if (result.length > 0) {
      setListToBeDisplayed(result);
    } else {
      setListToBeDisplayed(originalList);
    }

    console.log(searchValue);
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
