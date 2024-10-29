/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
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
import { StudentsInfoContext } from '../../context/StudentsInfoContext';

export default function SortBy() {
  const [dropdownSortBy, setDropdownSortBy] = useState(null);
  const [checkedActive, setCheckedActive] = useState(false);
  const [checkedInactive, setCheckedInactive] = useState(false);
  const { listToBeDisplayed, setListToBeDisplayed, originalList } =
    useContext(StudentsInfoContext);

  const handleChange = (event, field) => {
    if (field === 'fieldActive') {
      setCheckedActive(event.target.checked);
      originalList.map((currentObject) => {
        if (currentObject.status === 1) {
          console.log(currentObject);
          setListToBeDisplayed([...listToBeDisplayed, currentObject]);
        }
      });
      console.log(listToBeDisplayed);
    }

    if (field === 'fieldInactive') {
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
              handleChange(e, 'fieldActive');
            }}
            label="Ativos"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
          />
          <FormControlLabel
            control={<Checkbox />}
            onChange={(e) => {
              handleChange(e, 'fieldInactive');
            }}
            label="Inativos"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
          />
        </FormGroup>
      </DropdownSortBy>
    </DivContainer>
  );
}
