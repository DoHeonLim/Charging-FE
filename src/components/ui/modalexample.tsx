// import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useAtomValue, useAtom } from 'jotai';
import { carAtom, openAtom } from '@/atoms/car';
import carImage from '@/assets/images/d.png';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CarComment from '@/components/ui/carcomment';
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
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
      >
        <div className='bg-white p-[50px]'>
          <div className='grid grid-cols-2 min-w-[600px] min-h-[600px]'>
            <div>
              <MinimalCard>
                <img src={carImage} alt={selectCar ? selectCar.name : ''} className='' />
              </MinimalCard>
              <div className='p-[10px] text-xl'>
                {selectCar ? selectCar.brand + ' ' + selectCar.name : ''}
              </div>
            </div>
            <div className='pl-[60px]'>
              <h4> {selectCar ? selectCar.model_year : ''}년 출시</h4>
              <h4>복합전비 : {selectCar ? selectCar.fuel_efficiency : ''} ㎞/kWh</h4>
              <h4>{selectCar ? selectCar.car_type : ''}</h4>
              <h4>배터리 용량 {selectCar?.capacity}kWh</h4>
              <h4>총주행거리 {selectCar?.max_distance}Km</h4>
              <h4 className='text-blue-600 py-[10px]'>{selectCar?.price} 원</h4>
            </div>

            <div className='grid-col-subgrid col-span-2 p-[10px] text-xl'>
              코멘트
              <Separator className='mt-[10px]' />
            </div>

            <div className='grid-col-subgrid col-span-2'>
              <CarComment />
              <CarComment />
            </div>
          </div>
          <Button onClick={closeModal}>닫기</Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
