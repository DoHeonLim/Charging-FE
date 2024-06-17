import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '../ui/badge';
import { findAccommodationByCode, findStatByCode } from './MapAPIInfo';

import { useAtomValue } from 'jotai';
import { selectChargerAtom, selectChargerListAtom } from '@/atoms/chargerData';
import { convertDate } from '@/utils/convertedDate';
import { MapChargerStat } from './MapChargerStat';

import chargerImg from '../../assets/images/charger.png';
import infoImg from '../../assets/images/info.png';
import commentImg from '../../assets/images/subtitles.png';
import phoneImg from '../../assets/images/phone.png';
import plugImg from '../../assets/images/plug-zap.png';
import clockImg from '../../assets/images/clock.png';
import { Separator } from '@radix-ui/react-separator';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Charger } from '@/types/charger';

function MapChargerDetail() {
  const selectCharger = useAtomValue(selectChargerAtom);
  const chargerList = useAtomValue(selectChargerListAtom);
  if (!selectCharger || !chargerList) return null;

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
      <Tabs defaultValue='charger' className='w-[450px]'>
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
            <div>
              <div key={idx} className='flex ml-4 mt-4 gap-6'>
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
            {selectCharger.bnm}
          </CardDescription>
          <Separator className='border-[1px]' />
          <CardDescription className='flex text-2xl m-4'>
            <img src={clockImg} className='w-8 h-8 mr-4' />
            {selectCharger.useTime}
          </CardDescription>
          <Separator className='border-[1px]' />
          <CardDescription className='flex text-2xl m-4'>
            <img src={phoneImg} className='w-8 h-8 mr-4' />
            {selectCharger.busiCall}
          </CardDescription>
          <Separator className='border-[1px]' />
        </TabsContent>
        <TabsContent value='comment'>
          <div className='flex gap-2 mt-4'>
            <Input placeholder='리뷰를 달아주세요!' className='w-80 ml-4' />
            <Button type='button' className='ml-4'>
              확인
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default MapChargerDetail;
