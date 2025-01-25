/* eslint-disable no-const-assign */
import React, { useState, useContext, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LuFilter, LuFilterX } from 'react-icons/lu';
import { SearchAndFilterContext } from '../../context/SearchAndFilterContext';
import {
  DivContainer,
  InputWrapper,
  Button,
  IconArrowDrop,
  DropdownSortBy,
} from './styled';

export default function SortBy() {
  const [dropdownSortBy, setDropdownSortBy] = useState(null);
  const [checkedActive, setCheckedActive] = useState(false);
  const [checkedInactive, setCheckedInactive] = useState(false);
  const { setListToBeDisplayed, originalList } = useContext(
    SearchAndFilterContext,
  );

  const filterList = () => {
    let filteredList = [...originalList];

    if (checkedActive) {
      filteredList = filteredList.filter((item) => item.status === true);
    }

    if (checkedInactive) {
      filteredList = filteredList.filter((item) => item.status === false);
    }
    setListToBeDisplayed(filteredList);
  };

  useEffect(() => {
    filterList();
  }, [checkedActive, checkedInactive, originalList]);

  const handleChange = (event, field) => {
    if (field === 'fieldActive') {
      setCheckedActive(event.target.checked);
    }

    if (field === 'fieldInactive') {
      setCheckedInactive(event.target.checked);
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
          {checkedActive || checkedInactive ? (
            <LuFilterX size={18} />
          ) : (
            <LuFilter size={18} />
          )}
        </Button>
        <IconArrowDrop size={40} className={dropdownSortBy ? 'rotate' : ''} />
      </InputWrapper>

      <DropdownSortBy
        className={dropdownSortBy ? 'visible' : ''}
        onMouseLeave={handleMouseLeave}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            disabled={checkedInactive}
            onChange={(e) => {
              handleChange(e, 'fieldActive');
            }}
            label="Ativos"
            sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }}
          />
          <FormControlLabel
            control={<Checkbox />}
            disabled={checkedActive}
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
