/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { ButtonAddNewStudentStyled, ModalEdit } from './styled';
import FormAddNewStudent from '../FormAddNewStudent/FormAddNewStudent';

export default function ButtonAddNewStudent() {
  const modalRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(true);
    modalRef.current.showModal();
  };

  const closeModal = (
    resetForm,
    setFileUploaded,
    setUrlImgStudent,
    setProfileImgIsEmpty,
  ) => {
    if (resetForm) resetForm();
    setFileUploaded(null);
    setUrlImgStudent(null);
    setModalVisible(false);
    setProfileImgIsEmpty(false);
    modalRef.current.close();
  };
  return (
    <div>
      <ButtonAddNewStudentStyled onClick={handleClick}>
        Adicionar Aluno
      </ButtonAddNewStudentStyled>

      <ModalEdit ref={modalRef}>
        <FormAddNewStudent
          modalSelector={modalRef}
          funcCloseModal={closeModal}
        />
      </ModalEdit>
    </div>
  );
}
