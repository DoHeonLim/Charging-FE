// import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useAtomValue, useAtom } from 'jotai';
import { carAtom, carImageDataAtom, carReviewDataAtom, openAtom } from '@/atoms/car';
import cloudthunder from '@/assets/images/cloudthunder.png';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableHead,
  // TableHeader,
  TableRow,
} from '@/components/ui/table';
// import { carReview } from '@/data/carreview';
import {
  MinimalCard,
  // MinimalCardDescription,
  // MinimalCardImage,
  // MinimalCardTitle,
} from '@/components/ui/minimal-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CarReviewLike from '@/components/Carboard/CarReviewLike';
const ModalExample = () => {
  const selectCar = useAtomValue(carAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(openAtom);
  const carImageData = useAtomValue(carImageDataAtom);
  const [carReviewData, setCarReviewData] = useAtom(carReviewDataAtom);

  const closeModal = () => {
    setModalIsOpen(false);
    setCarReviewData(null);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-4'
      >
        <div className='overflow-y-scroll bg-white p-[50px]'>
          <div className='grid grid-cols-2 min-w-[600px] min-h-[600px] max-h-[600px]'>
            <div>
              <MinimalCard>
                <img
                  src={carImageData ? carImageData[selectCar ? selectCar.id - 1 : 0].img_url : ''}
                  alt={selectCar ? selectCar.name : ''}
                />
              </MinimalCard>
              <div className='p-[10px] text-xl'>
                {selectCar ? selectCar.brand + ' ' + selectCar.name : ''}
              </div>
            </div>
            <div className='pl-[60px]'>
              <div className='p-[10px] pt-0 sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                {selectCar ? selectCar.model_year : ''}년 출시
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                복합전비 : {selectCar ? selectCar.fuel_efficiency : 0} ㎞/kWh
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                {selectCar ? selectCar.car_type : ''}
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                배터리 용량 {selectCar ? selectCar.capacity : 0}kWh
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                총주행거리 {selectCar ? selectCar.max_distance : 0}Km
              </div>
              <Separator />
            </div>

            <div className='grid-col-subgrid col-span-2 p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
              코멘트
              <Separator className='mt-[10px] -mb-[10px]' />
            </div>

            <div className='grid-col-subgrid col-span-2'>
              <Table>
                <TableBody>
                  {carReviewData ? (
                    carReviewData.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className='w-[100px]'>
                          <div className='flex justify-center w-[100px] text-sm'>{item.author}</div>
                        </TableCell>
                        <TableCell className='min-w-[300px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                          {item.content}
                        </TableCell>
                        <TableCell>
                          <CarReviewLike props={item.reactionCount} />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    // <TableRow>
                    <div className='flex justify-center items-center overflow-hidden'>
                      <img
                        src={cloudthunder}
                        alt='구름천둥아이콘'
                        className='w-[48px] h-[48px] mx-[5px]'
                      />
                      <div className='text-2xl'>코멘트가 아직 없습니다</div>
                    </div>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
