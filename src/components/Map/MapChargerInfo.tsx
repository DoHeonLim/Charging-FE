import { findAccommodationByCode } from './MapInfo';
import { MapChargerStat } from './MapChargerStat';
import { Badge } from '../ui/badge';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Charger } from '@/types/charger';

function MapChargerInfo(chargerList: Array<Charger>) {
  return (
    <>
      {chargerList.map((item: Charger, idx: number) => (
        <div className='m-4' key={idx}>
          <div key={idx}>
            <div className='w-[400px]'>
              <div className='text-2xl'>{item.statNm}</div>
              <div className='text-lg'>{item.bnm}</div>
              <div className='text-lg'>{item.addr}</div>
              <div>{MapChargerStat(item.chgerType)}</div>
              <div className='flex gap-4 mt-2 mb-4'>
                <Badge variant='secondary' className='text-base '>
                  {findAccommodationByCode(item.kind)}
                </Badge>
                <Badge variant='destructive' className='text-base'>
                  {item.parkingFree === 'Y' ? '주차비 무료' : '주차비 유료'}
                </Badge>
                <Badge className='text-base'>
                  {item.limitYn === 'Y' ? '이용자 제한' : '이용자 제한 없음'}
                </Badge>
              </div>
              <Separator className='border-[1px]' />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MapChargerInfo;
