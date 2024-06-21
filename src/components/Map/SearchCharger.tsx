import {
  chargersAtom,
  commentListAtom,
  selectChargerAtom,
  selectChargerListAtom,
} from '@/atoms/chargerData';
import { useAtomValue, useSetAtom } from 'jotai';
import { Charger } from '@/types/charger';
import ResultChargerList from './ResultChargerList';
import { useCallback, useEffect } from 'react';
import { getMapComments, getMapDetailList } from '@/apis/mapApi';
import { userIdAtom } from '@/atoms/auth';
import { getUserAPI } from '@/apis/userApi';

function SearchCharger() {
  const chargers = useAtomValue(chargersAtom);
  const setSelectCharger = useSetAtom(selectChargerAtom);
  const setChargerResult = useSetAtom(selectChargerListAtom);
  const setCommentsList = useSetAtom(commentListAtom);
  const setUserId = useSetAtom(userIdAtom);

  async function handleGetChargerList(statId: string) {
    try {
      const detail = await getMapDetailList(statId);
      const detailResult = detail.data.items.item;
      const comments = await getMapComments(statId);
      const commentsResult = comments.data;
      setCommentsList(commentsResult);
      setChargerResult(detailResult);
    } catch (err) {
      console.log('에러:', err);
    }
  }

  const getUserId = async () => {
    try {
      const user = await getUserAPI();
      console.log(user);
      setUserId(user.data.user_id);
    } catch {
      console.log('로그인이 되지 않았습니다.');
    }
  };

  useEffect(() => {
    getUserId();
  }, []);

  const onClickResultCharger = useCallback((charger: Charger) => {
    setSelectCharger(charger);
    handleGetChargerList(charger.statId);
  }, []);

  return (
    <div className='h-[800px] rounded-md border max-h-full overflow-auto '>
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
