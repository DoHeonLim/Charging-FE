import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/auth';
import { carImgsByName, getUserAPI, putUserAPI } from '@/apis/userApi';
import { car_name2 } from '@/assets/images/profileCars2';

const ProfileCard2 = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [, setSelectedCarImage] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [userInfo, setUserInfo] = useAtom(userAtom);

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
  }, [dialogOpen]);

  const handleSave = async () => {
    if (selectedModel) {
      try {
        if (!userInfo) return null;
        const result = await carImgsByName(selectedModel);
        console.log(result);
        setSelectedCarImage(result.data.carImg);
        console.log(userInfo.user, selectedModel);
        await putUserAPI(userInfo.user, selectedModel);
        alert('저장되었습니다.');
        setDialogOpen(false); // 다이얼로그 닫기
      } catch (error) {
        console.error('Error fetching car image:', error);
        alert('차량 이미지를 불러오는데 실패했습니다.');
      }
    } else {
      alert('차량을 선택해 주세요.');
    }
  };

  return (
    <Card className='w-full max-w-sm mx-auto'>
      <CardHeader className='flex justify-center items-center'>
        <CardTitle>보유 차량</CardTitle>
        <CardDescription>차량을 선택하세요.</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <div className='w-full flex justify-center mb-4'>
          {userInfo?.car_img === '차량 정보가 없습니다.' ? (
            <div>차량 없음</div>
          ) : (
            <img className='w-96' src={userInfo?.car_img} />
          )}
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'>
              차량 선택
            </Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>차량 선택</DialogTitle>
            </DialogHeader>
            <div className='flex flex-col gap-4 py-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='manufacturer' className='text-sm font-medium'>
                  자동차 제조사
                </label>
                <Select
                  onValueChange={(value) => {
                    setSelectedManufacturer(value);
                    setSelectedModel(''); // 제조사가 변경되면 모델 초기화
                  }}
                  value={selectedManufacturer}
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='제조사를 선택해 주세요' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Object.keys(car_name2).map((manufacturer) => (
                        <SelectItem key={manufacturer} value={manufacturer}>
                          {manufacturer}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='model' className='text-sm font-medium'>
                  차량 모델
                </label>
                <Select
                  onValueChange={(value) => setSelectedModel(value)}
                  value={selectedModel}
                  disabled={!selectedManufacturer}
                >
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='모델을 선택해 주세요' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectedManufacturer &&
                        car_name2[selectedManufacturer].map((model) => (
                          <SelectItem key={model.name} value={model.name}>
                            {model.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type='button'
                onClick={handleSave}
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
              >
                저장
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileCard2;
