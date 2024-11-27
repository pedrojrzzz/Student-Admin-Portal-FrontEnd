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

  const listToBeFiltered = {};

  function convertToStringExceptObjects(obj) {
    // Verifica se o objeto é válido
    if (!obj) return {}; // Se o objeto for nulo ou indefinido, retornamos um objeto vazio

    // Criando uma cópia profunda para evitar mutação do estado original
    let newObj = JSON.parse(JSON.stringify(obj));

    // Verifica se é um array
    if (Array.isArray(newObj)) {
      // Se for array, iteramos sobre cada item e convertemos
      for (let i = 0; i < newObj.length; i++) {
        // Para cada item do array, convertemos suas propriedades para string
        for (let key in newObj[i]) {
          if (newObj[i].hasOwnProperty(key)) {
            if (key === 'id') continue; // Ignora a conversão se for a chave 'id'
            if (typeof newObj[i][key] !== 'object' || newObj[i][key] === null) {
              newObj[i][key] = String(newObj[i][key]); // Converte para string
            }
          }
        }
      }
    } else {
      // Se não for array, percorre o objeto e converte para string
      for (let key in newObj) {
        if (newObj.hasOwnProperty(key)) {
          // Se não for um objeto e nem array, converte para string
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
    const result = [];
    const alreadySearch = [];
    const objString = convertToStringExceptObjects(listToBeDisplayed);
    console.log(objString);
    /* objString.map((currentObject, index) => {
      Object.keys(currentObject).forEach((key) => {
        if (alreadySearch.includes(index)) return;

        if (String(currentObject[key].match(searchValue))) {
          alreadySearch.push(index);
          result.push(currentObject);
        }
      });
    }); */
    console.log(result);
  };

  return (
    <div>
      <InputWrapper>
        <SearchIcon size={20} />{' '}
        <Input
          placeholder="Search"
          type="search"
          onChange={(e) => searching(e)}
          on
        />
      </InputWrapper>
    </div>
  );
}
