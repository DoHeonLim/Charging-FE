// import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useAtomValue, useAtom } from 'jotai';
import { carAtom, openAtom } from '@/atoms/car';
import carImage from '@/assets/images/d.png';
import { Button } from '@/components/ui/button';

import {
  MinimalCard,
  // MinimalCardDescription,
  // MinimalCardImage,
  // MinimalCardTitle,
} from '@/components/ui/minimal-card';

const ModalExample = () => {
  const selectCar = useAtomValue(carAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(openAtom);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className='top-1/2 left-1/2'
      >
        <div className='grid grid-cols-4 gap-4'>
          <MinimalCard>
            <img
              src={carImage}
              alt={selectCar ? selectCar.name : ''}
              className='w-[300px] h-[200px]'
            />
          </MinimalCard>
          <div>{selectCar ? selectCar.brand + ' ' + selectCar.name : ''}</div>
          <div>
            {selectCar ? selectCar.model_year : ''} | 복합전비 :
            {selectCar ? selectCar.fuel_efficiency : ''} ㎞/kWh |
            {selectCar ? selectCar.car_type : ''}
          </div>
          <Button onClick={closeModal}>닫기</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
