import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '../ui/badge';
import { findAccommodationByCode, findStatByCode } from './MapInfo';

import { useAtomValue } from 'jotai';
import { selectChargerAtom } from '@/atoms/chargerData';
import { convertDate } from '@/utils/convertedDate';
import { MapChargerStat } from './MapChargerStat';

import chargerImg from '../../assets/images/charger.png';
import infoImg from '../../assets/images/info.png';
import commentImg from '../../assets/images/subtitles.png';
import phoneImg from '../../assets/images/phone.png';
import plugImg from '../../assets/images/plug-zap.png';
import clockImg from '../../assets/images/clock.png';
import { Separator } from '@radix-ui/react-separator';

function MapChargerDetail() {
  const selectCharger = useAtomValue(selectChargerAtom);
  if (!selectCharger) return null;

  return (
    <Card className='absolute top-0 left-[400px] botton-10 w-[450px] h-full'>
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
          <Card>
            <Badge
              className='text-base'
              variant={selectCharger?.stat == '3' ? 'destructive' : 'default'}
            >
              {findStatByCode(selectCharger?.stat)}
            </Badge>
            <CardDescription>{convertDate(selectCharger.lastTedt)}</CardDescription>
            <div>{MapChargerStat(selectCharger.chgerType)}</div>
          </Card>
        </TabsContent>
        <TabsContent value='info'>
          <Card>
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
          </Card>
        </TabsContent>
        <TabsContent value='comment'>
          <Card></Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export default MapChargerDetail;
