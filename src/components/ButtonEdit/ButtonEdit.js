/* eslint-disable no-const-assign */
import React, { useState, useRef } from 'react';
import { ButtonEditComponent, ModalEdit } from './styled';
import FormModalEdit from '../FormModalEdit/FormModalEdit';

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

  const handleCloseModal = (resetForm) => {
    modalSelector.current.close();
    if (resetForm) resetForm();
    setModalVisible(false);
  };

  return (
    <div className="ContainerFather">
      <ButtonEditComponent onClick={handleClick}>Editar</ButtonEditComponent>

      <ModalEdit ref={modalSelector}>
        <FormModalEdit
          data={props}
          modalSelector={modalSelector}
          funcCloseModal={handleCloseModal}
        />
      </ModalEdit>
    </div>
  );
}
