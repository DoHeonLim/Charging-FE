// import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useAtomValue, useAtom } from 'jotai';
import { carAtom, openAtom } from '@/atoms/car';
// import { Car } from '@/types/car';
import carImage from '@/assets/images/d.png';

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';

const ModalExample = () => {
  //   const setSelectCar = useSetAtom(carAtom);
  const selectCar = useAtomValue(carAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(openAtom);

  //   const onCliclickSelectCar = useCallback((car: Car) => {
  //     openModal;
  //     setSelectCar(car);
  //   }, []);

  //   const openModal = () => {
  //     setModalIsOpen(true);
  //   };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* <button onClick={(car) => onCliclickSelectCar}>모달 열기</button> */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <MinimalCard>
          <MinimalCardImage src={carImage} alt={selectCar ? selectCar.name : '빈값'} />
          <MinimalCardTitle>
            {selectCar ? selectCar.brand + ' ' + selectCar.name : '빈값'}
          </MinimalCardTitle>
          <MinimalCardDescription>
            {selectCar ? selectCar.model_year : '빈값'} | 복합전비 :
            {selectCar ? selectCar.fuel_efficiency : '빈값'} ㎞/kWh |
            {selectCar ? selectCar.car_type : '빈값'}
          </MinimalCardDescription>
        </MinimalCard>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default ModalExample;
