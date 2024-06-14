'use client';

/**
  form 관련
*/
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/**
  shadcn/ui 관련
*/
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

/**
  커스텀 컴포넌트 관련
*/
import { mapApi } from '@/apis/mapApi';
import { SelectZcode, SelectChgerType, findAccommodationByCode } from './MapInfo';
import { useEffect, useState } from 'react';
import MapChargerInfo from './MapChargerInfo';

const FormSchema = z.object({
  address: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export function MapForm() {
  const [chargerList, setChargerList] = useState([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    /* eslint-disable no-console */
    console.log(data);
  }

  const handleGetChargerList = async () => {
    try {
      const response = await mapApi.list();
      const result = response.data.items.item;
      setChargerList(result);
      /* eslint-disable no-console */
      console.log(chargerList);
    } catch (err) {
      /* eslint-disable no-console */
      console.log('에러:', err);
    }
  };

  useEffect(() => {
    /* eslint-disable no-console */
    console.log(chargerList);
  }, [chargerList]);

  return (
    <div>
      <Card className='w-[450px] h-36'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-2/3 space-y-6 flex self-auto ml-4'
          >
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='충전소 또는 지역 검색'
                      {...field}
                      className='w-64 ml-10 mt-6 '
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button onClick={handleGetChargerList} type='submit' className='ml-2'>
              검색
            </Button>
          </form>
          <div className='flex gap-6 ml-14 mt-4'>
            <SelectZcode />
            <SelectChgerType />
          </div>
        </Form>
      </Card>
      <div className='h-[800px] rounded-md border max-h-full overflow-auto'>
        {MapChargerInfo(chargerList)}
        <div className='m-4'>
          <div>
            <div className='w-[400px]'>
              <div>충전소명</div>
              <div>관리회사</div>
              <div>주소</div>
              <div>충전기 타입</div>
              <div className='flex ml-4 gap-4'>
                <Badge>시설종류 명</Badge>
                <Badge>무료</Badge>
                <Badge>제한없음</Badge>
              </div>
              <Separator className='my-4 border-[1px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapForm;
