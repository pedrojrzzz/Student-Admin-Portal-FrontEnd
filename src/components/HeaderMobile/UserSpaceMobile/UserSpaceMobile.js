import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DivContainer, HamburgerIcon, DropdownMenuUser } from './styled';

export default function LinksMobile() {
  const [dropdownMenuUser, setDropdownMenuUser] = useState(false);
  const timeRef = useRef(null);

  const handleClickDropdownMenuUser = () => {
    clearTimeout(timeRef.current);
    setDropdownMenuUser(!dropdownMenuUser);
  };

  const handleMouseEnterDropdownMenuUser = () => {
    clearTimeout(timeRef.current);
    setDropdownMenuUser(true);
  };

  const handleMouseLeaveDropdownMenuUser = () => {
    timeRef.current = setTimeout(() => {
      setDropdownMenuUser(false);
    }, 200);
  };
  return (
    <DivContainer>
      <HamburgerIcon
        onClick={handleClickDropdownMenuUser}
        onMouseLeave={handleMouseLeaveDropdownMenuUser}
      />
      <DropdownMenuUser
        className={`${dropdownMenuUser ? 'visible' : ''}`}
        onMouseEnter={handleMouseEnterDropdownMenuUser}
        onMouseLeave={handleMouseLeaveDropdownMenuUser}
      >
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </DropdownMenuUser>
    </DivContainer>
  );
}
