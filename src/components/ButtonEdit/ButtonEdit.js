/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { TextField } from '@mui/material';
import { ButtonEditComponent, ModalEdit, ButtonCloseModal } from './styled';
import { CustomTextField } from './inputFIeld';

export default function ButtonEdit(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const modalSelector = useRef(null);
  const handleClick = () => {
    if (modalVisible) {
      modalSelector.current.close();
      setModalVisible(false);
      return;
    }
    setModalVisible(true);
    modalSelector.current.showModal();
  };
  return (
    <div className="ContainerFather">
      <ButtonEditComponent onClick={handleClick}>Editar</ButtonEditComponent>

      <ModalEdit ref={modalSelector}>
        <div className="header-modal">
          <h3>Editar informações</h3>
          <ButtonCloseModal size={30} onClick={handleClick} />
        </div>

        <div className="body-modal">
          <CustomTextField
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </div>
      </ModalEdit>
    </div>
  );
}