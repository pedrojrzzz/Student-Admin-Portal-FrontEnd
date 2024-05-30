import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  DivContainer,
  DropdownMenuCategoria,
  DropdownMenuGenero,
  SetaDropdown,
} from './styled';

export default function Links() {
  const [dropdownCategoriaVisible, setDropdownCategoriaVisible] =
    useState(false);

  const [dropdownGeneroVisible, setDropdownGeneroVisible] = useState(false);
  const timeRef = useRef(null);
  const timeRef2 = useRef(null);

  const dropdownCategoriaEnter = () => {
    clearTimeout(timeRef.current);
    setDropdownCategoriaVisible(true);
  };

  const dropdownCategoriaLeave = () => {
    timeRef.current = setTimeout(() => {
      setDropdownCategoriaVisible(false);
    }, 200);
  };

  const dropdownGeneroEnter = () => {
    clearTimeout(timeRef2.current);
    setDropdownGeneroVisible(true);
  };

  const dropdownGeneroLeave = () => {
    timeRef2.current = setTimeout(() => {
      setDropdownGeneroVisible(false);
    }, 200);
  };
  return (
    <DivContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li
          className="dropdown__categoria"
          onMouseEnter={dropdownCategoriaEnter}
          onMouseLeave={dropdownCategoriaLeave}
        >
          <Link to="/">
            Categorias
            <SetaDropdown
              className={dropdownCategoriaVisible ? 'rotated' : ''}
            />
          </Link>

          <DropdownMenuCategoria
            className={`${dropdownCategoriaVisible ? 'visible' : ''}`}
          >
            <Link to="/categoria/ação-aventura">Ação/Aventura</Link>
            <Link to="/categoria/drama">Drama</Link>
            <Link to="/categoria/romance">Romance</Link>
            <Link to="/categoria/terror">Terror</Link>
          </DropdownMenuCategoria>
        </li>

        <li
          className="dropdown_genero"
          onMouseEnter={dropdownGeneroEnter}
          onMouseLeave={dropdownGeneroLeave}
        >
          <Link to="/">
            Gêneros
            <SetaDropdown
              className={`${dropdownGeneroVisible ? 'rotated' : ''}`}
            />
          </Link>

          <DropdownMenuGenero
            className={`${dropdownGeneroVisible ? 'visible' : ''}`}
          >
            <Link to="/TESTE">TESTE 1</Link>
            <Link to="/TESTE">TESTE 1</Link>
            <Link to="/TESTE">TESTE 1</Link>
          </DropdownMenuGenero>
        </li>
      </ul>
    </DivContainer>
  );
}
