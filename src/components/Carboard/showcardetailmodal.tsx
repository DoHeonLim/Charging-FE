import { useState } from 'react';
import React from 'react';
import Modal from 'react-modal';
//import Atom
import { carAtom, carImageDataAtom, carReviewDataAtom, openAtom } from '@/atoms/car';
import { userIdAtom } from '@/atoms/auth';
import { CarReviews, PostCarReviews, PutCarReviews, DeleteCarReviews } from '@/apis/carApi';
import { useAtomValue, useAtom, useSetAtom } from 'jotai';
//import image
import cloudthunder from '@/assets/images/cloudthunder.png';
import writeicon from '@/assets/images/edit-2.png';
//import util
import { convertDate2 } from '@/utils/convertedDate';
//import component
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { MinimalCard } from '@/components/ui/minimal-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CarReviewLike from '@/components/Carboard/CarReviewLike';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

//개별 차량 상세 정보 보여주는 모달 컴포넌트
const ShowCarDetailModal = () => {
  //
  const selectCar = useAtomValue(carAtom);
  const [modalIsOpen, setModalIsOpen] = useAtom(openAtom);
  const carImageData = useAtomValue(carImageDataAtom);
  const [carReviewData, setCarReviewData] = useAtom(carReviewDataAtom);
  const setSelectCar = useSetAtom(carAtom);
  const userId = useAtomValue(userIdAtom);

  const [clickEditButton, setClickEditButton] = useState(0);

  // 작성하기 댓글 상태값
  const [input, setInput] = useState('');
  // 작성하기 버튼 클릭 상태값
  const [isWriteClicked, setIsWriteClicked] = useState(false);
  // 수정 버튼 클릭 시 나오는 인풋 상태값
  const [updateInput, setUpdateInput] = useState('');
  // 수정 버튼 클릭 상태값
  const [isEditClicked, setIsEditClicked] = useState(false);
  // 삭제 버튼 클릭 상태값
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  if (!selectCar) return null;
  //작성 버튼 열기
  const openWrite = () => {
    setIsWriteClicked(true);
    setUpdateInput('');
  };
  // 수정 버튼 열기
  const openEdit = (id: number) => {
    setIsEditClicked(true);
    setUpdateInput('');
    setClickEditButton(id);
  };
  // 삭제 버튼 열기
  const openDelete = () => {
    setIsDeleteClicked(true);
  };
  //  수정 버튼 닫기
  const cancelEdit = () => {
    setUpdateInput('');
    setIsEditClicked(false);
  };
  // 삭제 버튼 닫기
  const cancelDelete = () => {
    setIsDeleteClicked(false);
  };

  // 리뷰 리스트 리렌더링 줄여서 리리리 킄킄
  async function changeReviewList(carId: number) {
    try {
      const result = await CarReviews(carId);
      const reviews = result.data.reviews;
      console.log(reviews);
      setCarReviewData(reviews);
      setInput('');
      setIsEditClicked(false);
      setIsWriteClicked(false);
    } catch (err) {
      console.log('에러:', err);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  //모달 닫을 시 선택된 차량 및 데이터 초기화
  const closeModal = () => {
    setModalIsOpen(false);
    setCarReviewData(null);
    setSelectCar(null);
  };
  const handleClick = async () => {
    try {
      // 로그인 한 경우에만 요청 가능
      if (userId) {
        if (input === '') {
          setIsWriteClicked(false);
          return;
        }

        await PostCarReviews(selectCar.id, input);

        changeReviewList(selectCar.id);
        //100자 까지 코멘트 달수 있으므로 예외처리
      } else if (101 > input.length) {
        alert('100글자 이상은 쓰실수 없습니다.');
        // 혹시 사용중 쿠키가 없어져서 로그아웃 될수있어서 체크
      } else {
        alert('로그인이 필요한 서비스입니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdateClick = async (carId: number, reviewId: number, input: string) => {
    if (updateInput === '') {
      setIsEditClicked(false);
      return;
    }
    await PutCarReviews(carId, reviewId, input);
    changeReviewList(carId);
  };

  const handleDeleteClick = async (carId: number, reviewId: number) => {
    await DeleteCarReviews(carId, reviewId);
    setIsDeleteClicked(false);
    changeReviewList(carId);
  };

  const reverseString: Function = (str: string) => {
    return str === '' ? '' : reverseString(str.substring(1)) + str.charAt(0);
  };
  const NickNameCut: Function = (str: string) => {
    return reverseString(reverseString(str).substring(str.length - 8)) + '...';
  };
  if (!carReviewData) return null;
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
          <div className='grid grid-cols-2 min-w-[800px] h-[600px]'>
            <div>
              <MinimalCard>
                <img
                  src={carImageData ? carImageData[selectCar.id - 1].img_url : ''}
                  alt={selectCar.name}
                />
              </MinimalCard>
              <div className='p-[10px] text-xl'>{selectCar.brand + ' ' + selectCar.name}</div>
            </div>
            <div className='pl-[60px]'>
              <div className='p-[10px] pt-0 sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                {selectCar.model_year}년 출시
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                복합전비 : {selectCar.fuel_efficiency} ㎞/kWh
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                {selectCar.car_type}
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                배터리 용량 {selectCar.capacity}kWh
              </div>
              <Separator />
              <div className='p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                총주행거리 {selectCar.max_distance}Km
              </div>
              <Separator />
            </div>

            <div className='grid-col-subgrid col-span-2 p-[10px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
              <div className='flex items-center justify-between'>
                {userId && isWriteClicked ? (
                  <React.Fragment>
                    <div>
                      <div className='sm:text-sm md:text-sm lg:text-base xl:text-lg'>코멘트</div>
                    </div>
                    <Input
                      value={input}
                      placeholder='리뷰를 달아주세요!'
                      className='w-1/2 ml-4'
                      onChange={handleChange}
                    />
                  </React.Fragment>
                ) : (
                  <div className='sm:text-sm md:text-sm lg:text-base xl:text-lg'>코멘트</div>
                )}
                <div>
                  {userId && isWriteClicked ? (
                    <Button
                      type='button'
                      className='w-[50px] h-[30px] text-xs'
                      onClick={handleClick}
                    >
                      확인
                    </Button>
                  ) : userId ? (
                    <Button className='w-[75px] h-[30px] text-xs' onClick={() => openWrite()}>
                      <img src={writeicon} className='w-[16px] h-[16px] mr-[2px]'></img>작성하기
                    </Button>
                  ) : (
                    <Button type='button' className='mr-2' disabled>
                      로그인해주세요
                    </Button>
                  )}
                </div>
              </div>
              <Separator className='mt-[10px] -mb-[10px]' />
            </div>

            <div className='grid-col-subgrid col-span-2'>
              <Table>
                <TableBody>
                  {
                    carReviewData.length === 0 ? (
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
                    ) : (
                      carReviewData.map((item, idx) => (
                        <TableRow key={idx}>
                          <TableCell className='w-[50px]'>
                            {item.profile_pic === 'no photo' ? ( //프로필 사진 있으면 사진으로, 없으면 기본 아바타
                              <Avatar>
                                <AvatarImage src={'https://github.com/shadcn.png'} />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            ) : (
                              <Avatar>
                                <AvatarImage src={item.profile_pic} />
                                <AvatarFallback>{item.profile_pic}</AvatarFallback>
                              </Avatar>
                            )}
                          </TableCell>
                          <TableCell className='w-[50px]'>
                            <div className='flex justify-center w-[50px] text-sm'>
                              {item.author.length >= 10 ? NickNameCut(item.author) : item.author}
                              {/* 닉네임 글자수가 10이 넘어가면 8글자 이후부터 ...으로 표시 */}
                            </div>
                          </TableCell>
                          <TableCell className='flex flex-col items-right min-w-[150px] sm:text-sm md:text-sm lg:text-base xl:text-lg'>
                            {isEditClicked && item.review_id === clickEditButton ? (
                              <div>
                                <input
                                  key={item.review_id}
                                  value={updateInput}
                                  onChange={(e) => setUpdateInput(e.target.value)}
                                  className=' flex border-orange-300 border-2 w-60'
                                  placeholder='수정된 댓글을 입력해주세요.'
                                />
                              </div>
                            ) : (
                              <div className='text-base pt-2'>{item.content}</div>
                            )}
                            <div className='flex justify-end mt-4 -mb-4 text-xs'>
                              작성시간 :{convertDate2(item.time.toString())}
                            </div>
                          </TableCell>
                          <TableCell className='w-[100px]'>
                            <CarReviewLike
                              reactionCount={item.reactionCount}
                              review_id={item.review_id}
                              state={item.state}
                            />
                          </TableCell>
                          <TableCell className='w-[100px]'>
                            {userId ? (
                              userId === item.user_id &&
                              (isEditClicked && !isDeleteClicked ? (
                                <div className='flex justify-end'>
                                  <Button
                                    type='button'
                                    className='w-14 h-8 bg-cyan-800 text-white'
                                    onClick={() =>
                                      handleUpdateClick(selectCar.id, item.review_id, updateInput)
                                    }
                                  >
                                    OK
                                  </Button>
                                  <Button
                                    variant='destructive'
                                    type='button'
                                    className='ml-4 w-14 h-8'
                                    onClick={() => cancelEdit()}
                                  >
                                    X
                                  </Button>
                                </div>
                              ) : !isEditClicked && isDeleteClicked ? (
                                <div className='flex justify-end'>
                                  <Button
                                    type='button'
                                    className='w-14 h-8 bg-cyan-800 text-white'
                                    onClick={() => handleDeleteClick(selectCar.id, item.review_id)}
                                  >
                                    OK
                                  </Button>
                                  <Button
                                    variant='destructive'
                                    type='button'
                                    className='ml-4 w-14 h-8'
                                    onClick={() => cancelDelete()}
                                  >
                                    X
                                  </Button>
                                </div>
                              ) : (
                                <div className='flex justify-end'>
                                  <Button
                                    type='button'
                                    className='w-14 h-8 bg-cyan-800 text-white'
                                    onClick={() => {
                                      openEdit(item.review_id);
                                    }}
                                  >
                                    수정
                                  </Button>
                                  <Button
                                    variant='destructive'
                                    type='button'
                                    className='ml-4 h-8 hover:bg-[#FACC15]'
                                    onClick={() => openDelete()}
                                  >
                                    삭제
                                  </Button>
                                </div>
                              ))
                            ) : (
                              <div className='w-10'></div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))
                    )
                    // :
                    // (
                    //선택된 차량의 코멘트 정보가 없을때 보여주는 컴포넌트
                    // <TableRow>
                    //   <TableCell>
                    //     <div className='flex justify-center items-center overflow-hidden'>
                    //       <img
                    //         src={cloudthunder}
                    //         alt='구름천둥아이콘'
                    //         className='w-[48px] h-[48px] mx-[5px]'
                    //       />
                    //       <div className='text-2xl'>코멘트가 아직 없습니다</div>
                    //     </div>
                    //   </TableCell>
                    // </TableRow>
                    // )
                  }
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
