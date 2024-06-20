import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';

const ProfileCard2 = (props: { initialName: string; initialNickname: string }) => {
  const [selectedCarImage, setSelectedCarImage] = useState<string | null>(null);

  // 기본 이미지 또는 선택된 이미지가 없는 경우의 대체 이미지
  const defaultImage = '/path/to/default/car/image.jpg';

  const handleSave = () => {
    // 저장 버튼을 눌렀을 때의 처리 로직을 여기에 추가
    alert('차량 정보가 저장되었습니다.');
  };

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader>
        <CardTitle>보유 차량</CardTitle>
        <CardDescription>차량을 선택하세요.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <div className='w-full flex justify-center mb-4'>
          <img
            src={selectedCarImage || defaultImage}
            alt='Selected Car'
            className='w-40 h-24 object-cover rounded-lg'
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'>
              차량 선택
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>차량 선택</DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button
                type='button'
                onClick={handleSave}
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
              >
                저장
              </Button>
              <DialogClose asChild>
                <Button
                  type='button'
                  className='bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ml-2'
                >
                  닫기
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileCard2;
