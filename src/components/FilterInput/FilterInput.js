/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useStudentsInfoContext from '../../hooks/useStudentsInfoContext';
import {
  DivContainer,
  InputWrapper,
  Button,
  IconArrowDrop,
  DropdownSortBy,
} from './styled';

export default function SortBy() {
  const [dropdownSortBy, setDropdownSortBy] = useState(null);
  const { data, loading, error } = useStudentsInfoContext();
  const [checkedActive, setCheckedActive] = useState(false);
  const [checkedInactive, setCheckedInactive] = useState(false);

  const handleChange = (event, field) => {
    if (field === 'field1') {
      setCheckedActive(event.target.checked);
      console.log(checkedActive);
    }

    if (field === 'field2') {
      setCheckedInactive(event.target.checked);
      console.log(checkedInactive);
    }
  };

  const handleClickDropdown = () => {
    setDropdownSortBy(!dropdownSortBy);
  };

  const handleMouseLeave = () => {
    setDropdownSortBy(false);
  };

  return (
    <DivContainer onMouseLeave={handleMouseLeave}>
      <InputWrapper
        className={checkedActive || checkedInactive ? 'active' : ''}
        onClick={handleClickDropdown}
      >
        <Button className={checkedActive || checkedInactive ? 'active' : ''}>
          Filter
        </Button>
        <IconArrowDrop size={20} className={dropdownSortBy ? 'rotate' : ''} />
      </InputWrapper>

      <DropdownSortBy
        className={dropdownSortBy ? 'visible' : ''}
        onMouseLeave={handleMouseLeave}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            onChange={(e) => {
              handleChange(e, 'field1');
            }}
            label="Ativos"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
          />
          <FormControlLabel
            control={<Checkbox />}
            onChange={(e) => {
              handleChange(e, 'field2');
            }}
            label="Inativos"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
          />
        </FormGroup>
      </DropdownSortBy>
    </DivContainer>
  );
}
