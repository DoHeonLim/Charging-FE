import { Charger } from '@/types/charger';
import { MapChargerStat } from './MapChargerStat';
import { findAccommodationByCode } from './MapAPIInfo';

import { Badge } from '../ui/badge';
import { Separator } from '@radix-ui/react-dropdown-menu';

interface ResultChargerListProps {
  charger: Charger;
  onClick: (charger: Charger) => void;
  isSelected: boolean;
}

function ResultChargerList({ charger, onClick, isSelected }: ResultChargerListProps) {
  return (
    <div
      onClick={() => onClick(charger)}
      className={`cursor-pointer p-2 ${isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
    >
      <div>
        <div className='w-[400px]'>
          <div className='text-2xl'>{charger.statNm}</div>
          <div className='text-lg'>{charger.busiNm}</div>
          <div className='text-lg'>{charger.addr}</div>
          <div>{MapChargerStat(charger.chgerType)}</div>
          <div className='flex gap-4 mt-2 mb-4'>
            <Badge variant='secondary' className='text-base '>
              {findAccommodationByCode(charger.kind)}
            </Badge>
            <Badge variant='destructive' className='text-base'>
              {charger.parkingFree === 'Y' ? '주차비 무료' : '주차비 유료'}
            </Badge>
            <Badge className='text-base'>
              {charger.limitYn === 'Y' ? '이용자 제한' : '이용자 제한 없음'}
            </Badge>
          </div>
          <Separator className='border-[1px]' />
        </div>
      </div>
    </div>
  );
}

export default ResultChargerList;
