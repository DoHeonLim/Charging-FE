import { findAccommodationByCode } from './MapInfo';
import { MapChargerStat } from './MapChargerStat';
import { Badge } from '../ui/badge';
import { Separator } from '@radix-ui/react-dropdown-menu';

function MapChargerInfo(chargerList: Array<any>) {
  return (
    <>
      {chargerList.map(
        (
          item: {
            kind: string;
            limitYn: string;
            parkingFree: string;
            kindDetail: string;
            chgerType: string;
            addr: string;
            statId: string;
            statNm: string;
            bnm: string;
          },
          idx: number
        ) => (
          <div className='m-4' key={idx}>
            <div>
              <div className='w-[400px]'>
                <div className='text-2xl'>{item.statNm}</div>
                <div className='text-lg'>{item.bnm}</div>
                <div className='text-lg'>{item.addr}</div>
                <div>{MapChargerStat(item.chgerType)}</div>
                <div className='flex gap-4 mt-2'>
                  <Badge variant='secondary' className='text-sm'>
                    {findAccommodationByCode(item.kind)}
                  </Badge>
                  <Badge variant='destructive' className='text-sm'>
                    {item.parkingFree === 'Y' ? '무료' : '유료'}
                  </Badge>
                  <Badge className='text-sm'>
                    {item.limitYn === 'Y' ? '이용자 제한' : '이용자 제한 없음'}
                  </Badge>
                </div>
                <Separator className='my-4 border-[1px]' />
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default MapChargerInfo;
