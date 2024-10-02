import React, { useState } from 'react';
import {
  DivContainer,
  InputWrapper,
  Button,
  IconArrowDrop,
  DropdownSortBy,
  DivContent,
} from './styled';
import useStudentsInfoContext from '../../hooks/useStudentsInfoContext';

export default function SortBy() {
  const [dropdownSortBy, setDropdownSortBy] = useState(null);
  const { data, loading, error } = useStudentsInfoContext();
  console.log(data, loading, error);

  const handleClickDropdown = () => {
    setDropdownSortBy(!dropdownSortBy);
  };

  const handleMouseLeave = () => {
    setDropdownSortBy(false);
  };

  return (
    <DivContainer onMouseLeave={handleMouseLeave}>
      <InputWrapper onClick={handleClickDropdown}>
        <Button>Filter</Button>
        <IconArrowDrop size={20} className={dropdownSortBy ? 'rotate' : ''} />
      </InputWrapper>

      <DropdownSortBy
        className={dropdownSortBy ? 'visible' : ''}
        onMouseLeave={handleMouseLeave}
      >
        <DivContent>
          <input type="checkbox" id="actives" name="actives" />
          <p>Actives</p>
        </DivContent>

        <DivContent>
          <input type="checkbox" id="inatives" name="inatives" />
          <p>Inatives</p>
        </DivContent>
      </DropdownSortBy>
    </DivContainer>
  );
}
