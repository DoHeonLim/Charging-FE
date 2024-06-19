// import { useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useAtomValue, useAtom } from 'jotai';
import { carAtom, carImageDataAtom, openAtom } from '@/atoms/car';
// import carImage from '@/assets/images/d.png';
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
import { carReview } from '@/data/carreview';
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
  const closeModal = () => {
    setModalIsOpen(false);
  };
  console.log(carImageData);
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
                  {carReview[0].reviews.map((item, idx) => (
                    //axios.get()으로 가져온 데이터로 carReview 대체할 예정

                    <TableRow key={idx}>
                      <TableCell>
                        <Avatar>
                          <AvatarImage src='https://github.com/shadcn.png' />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className='w-[100px]'>
                        <div className='flex justify-center w-[100px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                          {item.author}
                        </div>
                      </TableCell>
                      <TableCell className='min-w-[500px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                        {item.content}
                      </TableCell>
                      <TableCell>
                        <CarReviewLike />
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* <TableRow>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className='min-w-[100px]'>
                      <div className='flex justify-center'>아이디</div>
                    </TableCell>
                    <TableCell className='min-w-[500px]'>글자 수 제한이 필요해 보임~</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </div>
          </div>
          {/* <Button onClick={closeModal}>닫기</Button> */}
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
