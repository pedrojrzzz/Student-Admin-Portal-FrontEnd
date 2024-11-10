import React from 'react';
import { PiStudentLight } from 'react-icons/pi';
import { ButtonAddNewStudentStyled } from './styled';

export default function ButtonAddNewStudent() {
  return (
    <ButtonAddNewStudentStyled>
      <div className="icon">
        <PiStudentLight size={18} />
      </div>
      Add New Student
    </ButtonAddNewStudentStyled>
  );
}
