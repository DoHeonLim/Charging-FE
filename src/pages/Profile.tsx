import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '../components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../components/ui/input';
// import { Textarea } from '../../../components/ui/textarea';
// import { Toast, ToastProvider } from '../../../components/ui/toast';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';

// 유효성 검사 스키마 정의
const profileFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: '이름을 최소 한 글자 이상 입력해 주세요.' })
    .max(30, { message: '이름을 최대 30자 이하로 입력해 주세요.' }),
  nickname: z
    .string()
    .min(2, { message: '닉네임을 최소 두 글자 이상 입력해 주세요.' })
    .max(30, { message: '닉네임을 최대 30자 이하로 입력해 주세요.' }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

const carData = {
  manufacturers: [
    '현대',
    '기아',
    '제네시스',
    '테슬라',
    'BMW',
    '메르세데스',
    '폭스바겐',
    '아우디',
    '닛산',
    '쉐보레',
    '포드',
    '폴스타',
    '볼보',
    '재규어',
    '르노',
  ],
  models: {
    현대: ['코나 일렉트릭', '아이오닉5', '아이오닉6'],
    기아: ['쏘울 EV', '니로 EV', 'EV6'],
    제네시스: ['G80', 'GV60'],
    테슬라: ['Model S', 'Model X', 'Model 3'],
    BMW: ['iX', 'i4'],
    메르세데스: ['EQC', 'EQB', 'EQA', 'EQS', 'EQE'],
    폭스바겐: ['ID.4', 'ID.Buzz'],
    닛산: ['Leaf'],
    쉐보레: ['Bolt EV'],
    포드: ['머스탱 마하-E'],
    폴스타: ['폴스타2', '폴스타3'],
    볼보: ['XC40 Recharge'],
    재규어: ['I-Pace'],
    르노: ['Zoe'],
  },
};

type Manufacturer = keyof typeof carData.models | '';

export function ProfileForm() {
  const [image, setImage] = useState<string | null>(null);
  const [hasCar, setHasCar] = useState<string[]>(['있음']);
  const [selectedManufacturer, setSelectedManufacturer] = useState<Manufacturer>('');
  const [selectedModel, setSelectedModel] = useState('');

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log('Submitted data:', data);
    console.log('Uploaded image:', image);
    // 데이터 제출 후 처리 로직 추가
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHasCarChange = (checked: boolean | 'indeterminate', value: string) => {
    if (checked === true) {
      setHasCar([value]);
      if (value === '없음') {
        setSelectedManufacturer('');
        setSelectedModel('');
      }
    } else {
      setHasCar([]);
    }
  };

  const handleManufacturerChange = (value: Manufacturer) => {
    setSelectedManufacturer(value);
    setSelectedModel(''); // 제조사가 변경될 때 모델 초기화
  };

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <h3 className='text-3xl font-semibold'>회원 정보</h3>
        <Separator className='my-8' />

        <div className='flex flex-col space-y-8'>
          {' '}
          {/* 전체 섹션 간 간격 추가 */}
          <div className='flex flex-row space-x-8'>
            <div className='flex-1 flex flex-col space-y-8'>
              {' '}
              {/* 필드 간 간격 추가 */}
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder='이름을 입력해 주세요.' {...field} className='w-96' />
                    </FormControl>
                    <FormDescription>여기에 이름을 입력해 주세요.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='nickname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>닉네임</FormLabel>
                    <FormControl>
                      <Input placeholder='닉네임을 입력해 주세요.' {...field} className='w-96' />
                    </FormControl>
                    <FormDescription>
                      알파벳, 한글, 숫자를 포함해 20자 이내로 입력해 주세요.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* 보유 차량 섹션 */}
              <div className='flex flex-col space-y-4'>
                <div className='flex items-center space-x-4'>
                  {' '}
                  {/* 간격 조정 */}
                  <FormLabel className='text-sm font-medium'>보유 차량</FormLabel>
                  <div className='flex items-center space-x-3'>
                    {' '}
                    {/* 내부 간격 조정 */}
                    <FormControl>
                      <Checkbox
                        id='hasCarYes'
                        checked={hasCar.includes('있음')}
                        onCheckedChange={(checked: boolean) =>
                          handleHasCarChange(checked as boolean, '있음')
                        }
                      />
                    </FormControl>
                    <FormLabel htmlFor='hasCarYes' className='font-normal'>
                      있음
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        id='hasCarNo'
                        checked={hasCar.includes('없음')}
                        onCheckedChange={(checked: boolean) =>
                          handleHasCarChange(checked as boolean, '없음')
                        }
                      />
                    </FormControl>
                    <FormLabel htmlFor='hasCarNo' className='font-normal'>
                      없음
                    </FormLabel>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor='manufacturer' className='text-sm font-medium'>
                      자동차 제조사
                    </label>
                    <Select
                      onValueChange={handleManufacturerChange}
                      disabled={hasCar.includes('없음')}
                      value={selectedManufacturer}
                    >
                      <SelectTrigger className='w-[280px]'>
                        <SelectValue placeholder='브랜드를 선택해 주세요' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {carData.manufacturers.map((manufacturer) => (
                            <SelectItem key={manufacturer} value={manufacturer}>
                              {manufacturer}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor='model' className='text-sm font-medium'>
                      차량
                    </label>
                    <Select
                      onValueChange={handleModelChange}
                      disabled={hasCar.includes('없음') || !selectedManufacturer}
                      value={selectedModel}
                    >
                      <SelectTrigger className='w-[280px]'>
                        <SelectValue placeholder='차종을 선택해 주세요' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {selectedManufacturer &&
                            carData.models[selectedManufacturer].map((model) => (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {selectedModel && (
                  <div className='mt-4'>
                    <h3 className='text-lg font-medium'>보유 차량 리스트</h3>
                    <div className='flex items-center mt-2'>
                      <img
                        src={`/path/to/images/${selectedModel.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                        alt={selectedModel}
                        className='w-32 h-20 object-cover'
                      />
                      <span className='ml-4'>{selectedModel}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='flex-1 flex flex-col items-center space-y-4'>
              <Avatar className='w-40 h-40'>
                {image ? (
                  <AvatarImage src={image} alt='Profile Image' />
                ) : (
                  <AvatarFallback>업로드</AvatarFallback>
                )}
              </Avatar>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100'
              />
            </div>
          </div>
        </div>
        <Separator className='my-8' />
        {/* 저장 버튼 */}
        <div className='flex justify-end mt-8'>
          <Button type='submit'>저장</Button>
        </div>
      </form>
    </Form>
  );
}
