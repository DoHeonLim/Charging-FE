import { chargersAtom, selectChargerAtom, selectChargerListAtom } from '@/atoms/chargerData';
import { useAtomValue, useSetAtom } from 'jotai';
import { Charger } from '@/types/charger';
import ResultChargerList from './ResultChargerList';
import { useCallback } from 'react';
import { List } from '@/apis/mapApi';

function SearchCharger() {
  const chargers = useAtomValue(chargersAtom);
  const setSelectCharger = useSetAtom(selectChargerAtom);
  const setChargerResult = useSetAtom(selectChargerListAtom);

  async function handleGetChargerList(statId: string) {
    try {
      const response = await List(statId);
      console.log(response);
      const result = response.data.items.item;
      setChargerResult(result);
    } catch (err) {
      console.log('에러:', err);
    }
  }

  const onClickResultCharger = useCallback((charger: Charger) => {
    setSelectCharger(charger);
    handleGetChargerList(charger.statId);
  }, []);

  return (
    <div className='h-[850px] rounded-md border max-h-full overflow-auto '>
      {chargers && chargers.length !== 0 ? (
        chargers.map((charger: Charger, idx) => (
          <ResultChargerList
            key={idx}
            charger={charger}
            onClick={(charger) => {
              onClickResultCharger(charger);
            }}
          />
        ))
      ) : (
        <div className='text-xl absolute top-1/2 left-28'>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

export default SearchCharger;
