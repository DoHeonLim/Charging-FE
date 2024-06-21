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
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
  커스텀 컴포넌트 관련
*/

import { useAtom, useSetAtom } from 'jotai';
import { chargersAtom, pageAtom, selectChargerAtom } from '@/atoms/chargerData';
import SearchCharger from './SearchCharger';
import { useEffect, useState } from 'react';
import { getMapSearch } from '@/apis/mapApi';

/**
  @zcode 시도 코드
  @city 도시 명
*/
const zcodeList = [
  { zcode: '11', city: '서울' },
  { zcode: '26', city: '부산' },
  { zcode: '27', city: '대구' },
  { zcode: '28', city: '인천' },
  { zcode: '29', city: '광주' },
  { zcode: '30', city: '대전' },
  { zcode: '31', city: '울산' },
  { zcode: '36', city: '세종' },
  { zcode: '41', city: '경기' },
  { zcode: '51', city: '강원' },
  { zcode: '43', city: '충북' },
  { zcode: '44', city: '충남' },
  { zcode: '52', city: '전북' },
  { zcode: '46', city: '전남' },
  { zcode: '47', city: '경북' },
  { zcode: '48', city: '경남' },
  { zcode: '50', city: '제주' },
];

/**
  type : 타입 코드
  charger : 충전기 타입
*/
const chargerTypeList = [
  { type: '01', charger: 'DC차데모' },
  { type: '02', charger: '완속' },
  { type: '03', charger: 'DC차데모 + AC3상' },
  { type: '04', charger: 'DC콤보' },
  { type: '05', charger: 'DC차데모 + DC콤보' },
  { type: '06', charger: 'DC차데모 + AC3상 + DC콤보' },
  { type: '07', charger: 'AC3상' },
];

const FormSchema = z.object({
  addr: z.string().min(2, {
    message: '주소는 2글자 이상이여야 합니다.',
  }),
  zcode: z.string(),
  chgerType: z.string(),
});

export function MapForm() {
  const [chargers, setChargers] = useAtom(chargersAtom);
  const setSelectCharger = useSetAtom(selectChargerAtom);
  const [search, setSearch] = useState('');
  const [zcode, setZcode] = useState('');
  const [chgerType, setChgerType] = useState('');
  const [limit] = useState(20);
  const [page, setPage] = useAtom(pageAtom);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setZcode(zcode);
    setSearch(search);
    setChgerType(chgerType);
    getSearchCharger(search, page, limit, zcode, chgerType);
  }, [page, search, zcode, chgerType]);

  useEffect(() => {
    getTotal();
    setTotal(total);
  }, [search, zcode, chgerType]);

  const getTotal = async () => {
    try {
      const total = await getMapSearch(search, page, 9999, zcode, chgerType);
      if (total.data.chargersByAllQueryCount > 0 || (chgerType.length && zcode.length)) {
        setTotal(total.data.chargersByAllQueryCount / 20);
      } else if (total.data.chargersByStationAndTypeCount > 0 || chgerType.length) {
        setTotal(total.data.chargersByStationAndTypeCount / 20);
      } else if (total.data.chargerByStationAndZoneCount > 0 || zcode.length) {
        setTotal(total.data.chargerByStationAndZoneCount / 20);
      } else {
        setTotal(total.data.totalChargersCount / 20);
      }
    } catch (e) {}
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      addr: '',
      zcode: '',
      chgerType: '',
    },
  });

  const getSearchCharger = async (
    search: string,
    page: number,
    limit: number,
    zcode: string,
    chgerType: string
  ) => {
    const searchChargers = await getMapSearch(search, page, limit, zcode, chgerType);
    // 충전소 set
    if (searchChargers.data.chargersByAllQueryCount > 0 || (chgerType.length && zcode.length)) {
      setChargers(searchChargers.data.chargersByAllQuery);
    } else if (searchChargers.data.chargersByStationAndTypeCount > 0 || chgerType.length) {
      setChargers(searchChargers.data.chargersByStationAndType);
    } else if (searchChargers.data.chargerByStationAndZoneCount > 0 || zcode.length) {
      setChargers(searchChargers.data.chargersByStationAndZone);
    } else {
      setChargers(searchChargers.data.totalChargers);
    }
    // 검색 결과 받아올 때마다 selectCharger를 초기화 해줘야 함 아니라면 선택된 채로 유지됨
    setSelectCharger(null);
  };

  function onSubmit(values: z.infer<typeof FormSchema>) {
    // 검색값 넣어준다.
    setSearch(values.addr);
    setZcode(values.zcode);
    setChgerType(values.chgerType);
    setPage(1);
    console.log(search, page);
  }

  // select, 주소 리셋 버튼
  const handleReset = () => {
    form.reset({
      zcode: '',
      chgerType: '',
    });
  };

  const decreasePage = () => {
    if (page !== 1) {
      setPage((page) => page - 1);
      getSearchCharger(search, page, limit, zcode, chgerType);
    } else alert('첫 페이지입니다.');
  };

  const increasePage = () => {
    if (page < total + 1) {
      setPage((page) => page + 1);
      getSearchCharger(search, page, limit, zcode, chgerType);
    } else {
      alert('마지막 페이지입니다.');
    }
  };

  return (
    <div>
      <Card className='w-[450px] h-40'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex-column w-2/3 space-y-6 self-auto ml-4'
          >
            <div className='flex ml-4 mt-6'>
              <FormField
                control={form.control}
                name='zcode'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[150px] mr-5'>
                          <SelectValue placeholder='지역' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>지역</SelectLabel>
                          {zcodeList.map((item, idx) => (
                            <SelectItem key={idx} value={item.zcode}>
                              {item.city}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='chgerType'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[150px] mr-4'>
                          <SelectValue placeholder='타입' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>타입</SelectLabel>
                          {chargerTypeList.map((item, idx) => (
                            <SelectItem key={idx} value={item.type}>
                              {item.charger}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className='' onClick={() => handleReset()}>
                리셋
              </Button>
            </div>
            <div className='flex'>
              <FormField
                control={form.control}
                name='addr'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='충전소 또는 지역 검색' {...field} className='w-80 ml-4' />
                    </FormControl>
                    <FormMessage className='ml-4' />
                  </FormItem>
                )}
              />
              <Button type='submit' className='ml-4'>
                검색
              </Button>
            </div>
          </form>
        </Form>
      </Card>
      {chargers && (
        <div className='flex justify-around items-center'>
          {page === 1 ? (
            <Button
              className='hover:bg-orange-200 w-24 h-8'
              onClick={() => {
                decreasePage();
              }}
              disabled
            >
              이전
            </Button>
          ) : (
            <Button
              className='hover:bg-orange-200 w-24 h-8'
              onClick={() => {
                decreasePage();
              }}
            >
              이전
            </Button>
          )}
          <div>현재:{page}</div>
          <div>마지막:{Math.floor(total + 1)}</div>
          <div>합계:{total * 20}</div>
          {page > total ? (
            <Button
              className='hover:bg-orange-200 w-24 h-8'
              onClick={() => {
                increasePage();
              }}
              disabled
            >
              다음
            </Button>
          ) : (
            <Button
              className='hover:bg-orange-200 w-24 h-8'
              onClick={() => {
                increasePage();
              }}
            >
              다음
            </Button>
          )}
        </div>
      )}
      <div className='h-[750px] rounded-md border max-h-full overflow-auto relative'>
        <SearchCharger />
      </div>
    </div>
  );
}
