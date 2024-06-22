import ProfileCard2 from './ProfileCard2';
import ProfileCard3 from './ProfileCard3';
import { getUserAPI, putUserAPI } from '@/apis/userApi';
import { userAtom } from '@/atoms/auth';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useAtom } from 'jotai';

export function ProfileForm() {
  // const [userId, setUserId] = useAtom(userIdAtom);
  const [userInfo, setUserInfo] = useAtom(userAtom);
  const [open, setOpen] = useState(false);
  const [nickName, setnickName] = useState('');
  const [imgUrl, setImgUrl] = useState<File>();

  // const encodeFileToBase64 = (image: File) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(image);
  //     reader.onload = (event: any) => resolve(event.target.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const getUserInfo = async () => {
    try {
      const result = await getUserAPI();
      const user = result.data;
      setUserInfo(user);
      console.log(user);
    } catch {
      console.log('로그인이 되지 않았습니다.');
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [open]);

  useEffect(() => {
    setImgUrl(imgUrl), setnickName(nickName);
  }, [imgUrl, nickName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      console.log(imgUrl);
      if (!imgUrl) return null;
      formData.append('profilePhoto', imgUrl);

      const result = await axios({
        method: 'post',
        url: 'http://kdt-ai-10-team02.elicecoding.com/api/profile-pics',
        data: formData, //폼데이터를 여기로 옮긴다.
        headers: {
          'Content-type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      console.log(result);

      if (!userInfo) return null;

      await putUserAPI(nickName, userInfo.car.name);

      // const result = await saveProfileImg(imgUrl);
      // console.log(result);
      // if (!userInfo) return null;
      // await putUserAPI(nickName, userInfo.car_img);
      // console.log(result);
      alert('저장되었습니다.');
      setOpen(false); // 다이얼로그 닫기
    } catch (err) {
      console.log(err);
    }

    // setimgUrl();
  };

  function handleFileInput(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event?.target?.files?.[0];
    setImgUrl(file);
    console.log(imgUrl);
  }

  return (
    <div className='space-y-8 p-4'>
      <div className='w-full'>
        <h1 className='text-3xl font-bold mb-4'>계정 관리</h1>
      </div>
      <div className='flex flex-col gap-20'>
        <div className='flex flex-col lg:flex-row gap-4 justify-around'>
          {/* 첫 번째 카드 */}
          <div className='flex'>
            <Card className='w-[380px]'>
              <CardHeader />
              <CardContent>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-between flex-wrap gap-6'>
                    <div className='flex-column items-center gap-6'>
                      <div>
                        <div className='text-2xl font-bold'>{userInfo?.user.slice(0, 9)}</div>
                      </div>
                      {userInfo?.user_img == '' ? (
                        <img
                          className='w-[300px] h-[300px]'
                          src='https://github.com/shadcn.png'
                          alt='default'
                        />
                      ) : (
                        <img src={userInfo?.user_img} alt={userInfo?.user} />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='flex justify-center'>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant='outline'
                      className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
                    >
                      정보수정
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                      <DialogTitle>프로필 수정</DialogTitle>
                      <DialogDescription>
                        프로필 정보를 수정하고 이미지를 변경하세요.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleSubmit}
                      encType={'multipart/form-data'}
                      className='flex-column w-2/3 space-y-6 self-auto ml-4'
                    >
                      <Input
                        name='nickName'
                        placeholder='닉네임'
                        onChange={(e) => setnickName(e.target.value)}
                      />
                      <Input
                        name='profilePhoto'
                        type='file'
                        accept='image/*'
                        onChange={handleFileInput}
                      />
                      <Button type='submit' className='ml-4'>
                        수정
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>

          {/* 두 번째 카드 */}
          <div className='flex'>
            <ProfileCard2 />
          </div>
        </div>
      </div>

      {/* 세 번째 카드 */}
      <div className='w-full'>
        <ProfileCard3 />
      </div>
    </div>
  );
}
