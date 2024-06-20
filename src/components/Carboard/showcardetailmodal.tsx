import Modal from 'react-modal';
import { useAtomValue, useAtom, useSetAtom } from 'jotai';
//import Atom
import { carAtom, carImageDataAtom, carReviewDataAtom, openAtom } from '@/atoms/car';
import { userIdAtom } from '@/atoms/auth';
//import image
import cloudthunder from '@/assets/images/cloudthunder.png';
import writeicon from '@/assets/images/edit-2.png';
//import component
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { MinimalCard } from '@/components/ui/minimal-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CarReviewLike from '@/components/Carboard/CarReviewLike';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

//개별 차량 상세 정보 보여주는 모달 컴포넌트
const ShowCarDetailModal = () => {
  const selectCar = useAtomValue(carAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(openAtom);
  const carImageData = useAtomValue(carImageDataAtom);
  const [carReviewData, setCarReviewData] = useAtom(carReviewDataAtom);
  const setSelectCar = useSetAtom(carAtom);
  const userId = useAtomValue(userIdAtom);

  //모달 닫을 시 선택된 차량 및 데이터 초기화
  const closeModal = () => {
    setModalIsOpen(false);
    setCarReviewData(null);
    setSelectCar(null);
  };

  useEffect(() => {
    console.log(carReviewData);
  }, [carReviewData]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false} //Hidden
        onRequestClose={closeModal}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[10px] border-4'
      >
        <div className='overflow-y-scroll bg-white p-[50px]'>
          {/* 모달에 스크롤바 추가 */}
          <div className='grid grid-cols-2 min-w-[600px] h-[600px]'>
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
              <div className='flex items-center justify-between'>
                코멘트
                {userId && (
                  <Button className='w-[75px] h-[30px] text-xs'>
                    {/* onClick = {()=>(코멘트 작성 함수)} */}
                    <img src={writeicon} className='w-[16px] h-[16px]'></img>작성하기
                  </Button>
                )}
              </div>
              <Separator className='mt-[10px] -mb-[10px]' />
            </div>

            <div className='grid-col-subgrid col-span-2'>
              <Table>
                <TableBody>
                  {carReviewData ? (
                    carReviewData.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          {item.profile_pic ? ( //프로필 사진 있으면 사진으로, 없으면 기본 아바타
                            <Avatar>
                              <AvatarImage src={item.profile_pic} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          ) : (
                            <Avatar>
                              <AvatarImage src={'https://github.com/shadcn.png'} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          )}
                        </TableCell>
                        <TableCell className='w-[100px]'>
                          <div className='flex justify-center w-[100px] text-sm'>{item.author}</div>
                        </TableCell>
                        <TableCell className='min-w-[300px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                          {item.content}
                        </TableCell>
                        <TableCell>
                          <CarReviewLike
                            reactionCount={item.reactionCount}
                            review_id={item.review_id}
                          />
                        </TableCell>
                        {
                          userId && (
                            // 유저 닉네임 == 작성자 닉네임?
                            <div>
                              <Button>수정</Button>
                              <Button>삭제</Button>
                            </div>
                          )
                          // :;
                        }
                      </TableRow>
                    ))
                  ) : (
                    //선택된 차량의 코멘트 정보가 없을때 보여주는 컴포넌트
                    <TableRow>
                      <TableCell>
                        <div className='flex justify-center items-center overflow-hidden'>
                          <img
                            src={cloudthunder}
                            alt='구름천둥아이콘'
                            className='w-[48px] h-[48px] mx-[5px]'
                          />
                          <div className='text-2xl'>코멘트가 아직 없습니다</div>
                        </div>
                      </TableCell>
                    </TableRow>
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

export default ShowCarDetailModal;
