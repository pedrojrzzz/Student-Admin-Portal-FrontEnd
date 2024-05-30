import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DivContainer,
  MenuBurguer,
  MenuDropdownMobile,
  SetaMenuDropdown,
  DropdownMenuGenero,
  DropdownMenuCategoria,
} from './styled';

export default function LinksMobile() {
  const [menuDropdownMobile, setMenuDropdownMobile] = useState(false);
  const dropdownRef = useRef(null); // Referencia o menu suspenso
  const timeRef = useRef(null); // Referência a um temporizador usado para atrasar o fechamento do menu suspenso.
  const timeRef1 = useRef(null);
  const timeRef2 = useRef(null);
  const [menuDropdownCategoria, setMenuDropdownCategoria] = useState(false);
  const [menuDropdownGenero, setMenuDropdownGenero] = useState(false);

  // Quando o mouse entra no ícone do menu, esta função é chamada
  const menuDropdownMobileEnter = () => {
    // Cancela qualquer temporizador ativo
    clearTimeout(timeRef.current);
    // Define menuDropdownMobile como true para mostrar o menu suspenso
    setMenuDropdownMobile(true);
  };

  // Quando o mouse sai do ícone do menu, esta função é chamada
  const menuDropdownMobileLeave = () => {
    // Configura um temporizador para ocultar o menu suspenso após um breve intervalo
    timeRef.current = setTimeout(() => {
      // Define menuDropdownMobile como false para esconder o menu suspenso
      setMenuDropdownMobile(false);
    }, 200); // Tempo em milissegundos antes de ocultar o menu suspenso (200ms)
  };

  // Quando o mouse entra no menu suspenso, esta função é chamada
  const handleDropdownMouseEnter = () => {
    // Cancela qualquer temporizador ativo para evitar que o menu suspenso seja ocultado imediatamente
    clearTimeout(timeRef.current);
  };

  // Quando o mouse sai do menu suspenso, esta função é chamada
  const handleDropdownMouseLeave = () => {
    // Chama a função para configurar o temporizador e ocultar o menu suspenso
    menuDropdownMobileLeave();
  };

  const handleDropdownMenuClick = () => {
    clearTimeout(timeRef.current);
    setMenuDropdownMobile(!menuDropdownMobile);
  };

  // Menu Categoria
  const handleClickMenuCategoria = () => {
    clearTimeout(timeRef1.current);
    setMenuDropdownCategoria(!menuDropdownCategoria);
  };

  const handleMouseEnterMenuCategoria = () => {
    clearTimeout(timeRef1.current);
    setMenuDropdownCategoria(true);
  };

  const handleMouseLeaveMenuCategoria = () => {
    timeRef1.current = setTimeout(() => {
      setMenuDropdownCategoria(false);
    }, 200);
  };
  // ********************

  // Menu Gênero
  const handleClickMenuGenero = () => {
    clearTimeout(timeRef2.current);
    setMenuDropdownGenero(!menuDropdownGenero);
  };

  const handleMouseEnterMenuGenero = () => {
    clearTimeout(timeRef2.current);
    setMenuDropdownGenero(true);
  };

  const handleMouseLeaveMenuGenero = () => {
    timeRef2.current = setTimeout(() => {
      setMenuDropdownGenero(false);
    }, 200);
  };

  // **************************
  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClickMenuCategoria();
    }
  };
  return (
    <DivContainer>
      <MenuBurguer
        onMouseEnter={menuDropdownMobileEnter}
        onMouseLeave={menuDropdownMobileLeave}
        onClick={handleDropdownMenuClick}
      />
      <MenuDropdownMobile
        ref={dropdownRef} // estamos dizendo ao React para associar essa referência ao elemento do DOM
        className={`${menuDropdownMobile ? 'visible' : ''}`}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <SetaMenuDropdown
              className={`${menuDropdownCategoria ? 'rotated' : ''}`}
            />

            <Link
              to="/"
              onClick={handleClickMenuCategoria}
              onMouseEnter={handleMouseEnterMenuCategoria}
              onMouseLeave={handleMouseLeaveMenuCategoria}
              onKeyDown={onKeyDownEnter}
              tabIndex={0}
            >
              Categorias
            </Link>
            <DropdownMenuCategoria
              className={`${menuDropdownCategoria ? 'visible' : ''}`}
              onMouseEnter={handleMouseEnterMenuCategoria}
              onMouseLeave={handleMouseLeaveMenuCategoria}
            >
              <ul>
                <li>
                  <Link to="/teste">Animes Dublados</Link>
                </li>

                <li>
                  <Link to="/teste">Animes Legendados</Link>
                </li>
              </ul>
            </DropdownMenuCategoria>
          </li>

          <li>
            <SetaMenuDropdown
              className={`${menuDropdownGenero ? 'rotated' : ''}`}
            />
            <Link
              to="/"
              onClick={handleClickMenuGenero}
              onMouseEnter={handleMouseEnterMenuGenero}
              onMouseLeave={handleMouseLeaveMenuGenero}
              onKeyDown={onKeyDownEnter}
              tabIndex={0}
            >
              Gênero
            </Link>
            <DropdownMenuGenero
              className={`${menuDropdownGenero ? 'visible' : ''}`}
              onMouseEnter={handleMouseEnterMenuGenero}
              onMouseLeave={handleMouseLeaveMenuGenero}
            >
              <ul className="dropdownMenuGenero">
                <li>
                  <Link to="/">Ação/Aventura</Link>
                </li>
                <li>
                  <Link to="/">Romance</Link>
                </li>
                <li>
                  <Link to="/">Terror</Link>
                </li>
              </ul>
            </DropdownMenuGenero>
          </li>
        </ul>
      </MenuDropdownMobile>
    </DivContainer>
  );
}
