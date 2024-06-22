import { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { Comments } from '@/types/user';
import { Charger } from '@/types/charger';
import { DeleteMapComments, PutMapComments, getMapComments, postMapComments } from '@/apis/mapApi';
import { commentListAtom, selectChargerAtom, selectChargerListAtom } from '@/atoms/chargerData';
import { findAccommodationByCode, findStatByCode } from './MapAPIInfo';
import { convertDate, convertDate2 } from '@/utils/convertedDate';
import { userIdAtom } from '@/atoms/auth';
import { MapChargerStat } from './MapChargerStat';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '../ui/badge';
import { Separator } from '@radix-ui/react-separator';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import chargerImg from '../../assets/images/charger.png';
import infoImg from '../../assets/images/info.png';
import commentImg from '../../assets/images/subtitles.png';
import phoneImg from '../../assets/images/phone.png';
import plugImg from '../../assets/images/plug-zap.png';
import clockImg from '../../assets/images/clock.png';

function MapChargerDetail() {
  const selectCharger = useAtomValue(selectChargerAtom);
  const chargerList = useAtomValue(selectChargerListAtom);
  const [commentsList, setCommentsList] = useAtom(commentListAtom);
  const userId = useAtomValue(userIdAtom);

  const [clickEditButton, setClickEditButton] = useState(0);

  // 기본 댓글 상태값
  const [input, setInput] = useState('');

  // 수정 버튼 클릭 시 나오는 인풋 상태값
  const [updateInput, setUpdateInput] = useState('');
  // 수정 버튼 클릭 상태값
  const [isEditClicked, setIsEditClicked] = useState(false);

  // 삭제 버튼 클릭 상태값
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

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

  if (!selectCharger || !chargerList) return null;

  async function changeChargerList(statId: string) {
    try {
      const comments = await getMapComments(statId);
      const commentsResult = comments.data;
      console.log(commentsResult);
      setCommentsList(commentsResult);
      setInput('');
      setIsEditClicked(false);
    } catch (err) {
      console.log('에러:', err);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = async () => {
    try {
      // 로그인 한 경우에만 요청 가능
      if (userId) {
        await postMapComments(selectCharger.statId, input);
        changeChargerList(selectCharger.statId);
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

  const handleUpdateClick = async (comment_id: number, input: string) => {
    if (updateInput === '') {
      setIsEditClicked(false);
      return;
    }
    await PutMapComments(comment_id, input);
    changeChargerList(selectCharger.statId);
  };

  const handleDeleteClick = async (comment_id: number) => {
    await DeleteMapComments(comment_id);
    setIsDeleteClicked(false);
    changeChargerList(selectCharger.statId);
  };

  return (
    <Card className='absolute top-0 left-[450px] botton-10 w-[450px] h-full'>
      <CardHeader>
        <CardTitle>{selectCharger?.statNm}</CardTitle>
        <CardDescription>{selectCharger?.addr}</CardDescription>
      </CardHeader>
      <CardContent className='flex gap-4'>
        <Badge variant='secondary' className='text-base'>
          {findAccommodationByCode(selectCharger?.kind)}
        </Badge>
        <Badge variant='destructive' className='text-base'>
          {selectCharger.parkingFree === 'Y' ? '주차비 무료' : '주차비 유료'}
        </Badge>
        <Badge className='text-base'>
          {selectCharger.limitYn === 'Y' ? '이용자 제한' : '이용자 제한 없음'}
        </Badge>
      </CardContent>
      <Tabs defaultValue='charger' className='w-[450px] h-[800px] '>
        <TabsList className='flex w-full gap-16'>
          <TabsTrigger value='charger'>
            <img src={chargerImg} className='w-8 h-8 fill-' />
          </TabsTrigger>
          <TabsTrigger value='info'>
            <img src={infoImg} />
          </TabsTrigger>
          <TabsTrigger value='comment'>
            <img src={commentImg} />
          </TabsTrigger>
        </TabsList>
        <TabsContent value='charger'>
          {chargerList.map((charger: Charger, idx) => (
            <div key={idx}>
              <div className='flex ml-4 mt-4 gap-6'>
                <Badge
                  className='text-base'
                  variant={charger?.stat == '3' ? 'destructive' : 'default'}
                >
                  {findStatByCode(charger?.stat)}
                </Badge>
                <CardDescription className='content-center'>
                  {charger.statId + '-' + charger.chgerId}
                </CardDescription>
              </div>
              <div>
                <CardDescription className='mt-4 ml-4'>
                  {convertDate(charger.lastTedt)}
                </CardDescription>
                <div className='mb-4'>{MapChargerStat(charger.chgerType)}</div>
              </div>
              <Separator className='border-2' />
            </div>
          ))}
        </TabsContent>
        <TabsContent value='info'>
          <CardDescription className='flex text-2xl m-4'>
            <img src={plugImg} className='w-8 h-8 mr-4' />
            {chargerList[0].busiNm}
          </CardDescription>
          <Separator className='border-[1px]' />
          <CardDescription className='flex text-2xl m-4'>
            <img src={clockImg} className='w-8 h-8 mr-4' />
            {chargerList[0].useTime}
          </CardDescription>
          <Separator className='border-[1px]' />
          <CardDescription className='flex text-2xl m-4'>
            <img src={phoneImg} className='w-8 h-8 mr-4' />
            {chargerList[0].busiCall}
          </CardDescription>
          <Separator className='border-[1px]' />
        </TabsContent>
        <TabsContent value='comment'>
          <div className='flex gap-2 mt-4 mb-4 '>
            <Input
              value={input}
              placeholder='리뷰를 달아주세요!'
              className='w-80 ml-4'
              onChange={handleChange}
            />
            {userId ? (
              <Button type='button' className='ml-4' onClick={handleClick}>
                확인
              </Button>
            ) : (
              <Button type='button' className='mr-2' disabled>
                로그인해주세요
              </Button>
            )}
          </div>
          <Separator className='border-[1px]' />
          <div className='overflow-y-auto h-[700px]'>
            {commentsList ? (
              commentsList.map((comments: Comments) => (
                <div key={comments.id} className='flex-column ml-6 mt-6'>
                  <div>
                    <div className='flex items-center'>
                      {comments.profile_pic === null ? (
                        <Avatar className='mr-4'>
                          <AvatarImage src='https://github.com/shadcn.png' />
                          <AvatarFallback>{comments.nickName.slice(0, 9)}</AvatarFallback>
                        </Avatar>
                      ) : (
                        <Avatar className='mr-4'>
                          <AvatarImage src={comments.profile_pic} />
                          <AvatarFallback>{comments.nickName.slice(0, 9)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className='text-xl'>{comments.nickName.slice(0, 9)}</div>
                      <div>
                        {userId === comments.user_id &&
                          (isEditClicked && !isDeleteClicked ? (
                            <div className='flex justify-end'>
                              <Button
                                type='button'
                                className='ml-16 w-14 h-8 bg-cyan-800 text-white'
                                onClick={() => handleUpdateClick(comments.id, updateInput)}
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
                                className='ml-16 w-14 h-8 bg-cyan-800 text-white'
                                onClick={() => handleDeleteClick(comments.id)}
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
                                className='ml-16 w-14 h-8 bg-cyan-800 text-white'
                                onClick={() => {
                                  openEdit(comments.id);
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
                          ))}
                      </div>
                    </div>
                    {isEditClicked && comments.id === clickEditButton ? (
                      <div>
                        <input
                          key={comments.id}
                          value={updateInput}
                          onChange={(e) => setUpdateInput(e.target.value)}
                          className='flex ml-14 mt-2 border-orange-300 border-2 w-60'
                          placeholder='수정된 댓글을 입력해주세요.'
                        />
                      </div>
                    ) : (
                      <div className='flex ml-14 mt-2 text-lg'>{comments.comment}</div>
                    )}
                    <div className='flex justify-end mt-4 mb-4 text-base mr-4'>
                      작성시간 :{convertDate2(comments.created_at.toString())}
                    </div>
                  </div>

                  <Separator className='border-[1px]' />
                </div>
              ))
            ) : (
              <div>댓글이 없습니다.</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default MapChargerDetail;
