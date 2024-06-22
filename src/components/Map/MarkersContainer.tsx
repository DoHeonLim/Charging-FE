import { chargersAtom, selectChargerAtom, selectChargerListAtom } from '@/atoms/chargerData';
import { mapAtom } from '@/atoms/map';
import { Charger } from '@/types/charger';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import Marker from './Marker';
import markerImg from '../../assets/images/charger-marker.png';
import activeMarkerImg from '../../assets/images/charger-marker-active.png';
import InfoWindow from './InfoWindow';
import { getMapDetailList } from '@/apis/mapApi';
import MapChargerDetail from './MapChargerDetail';

function MarkersContainer() {
  /**
   * @map 맵 값 가져온다.
   */
  const map = useAtomValue(mapAtom);
  /**
   * @chargers 충전소 값들 가져온다.
   */
  const chargers = useAtomValue(chargersAtom);

  /**
   * @selectCharger 선택한 충전소 값 가져온다.
   */
  const [selectCharger, setSelectCharger] = useAtom(selectChargerAtom);

  /**
   * @setChargerResult 선택한 충전소의 충전기 리스트 가져온다.
   */
  const setChargerResult = useSetAtom(selectChargerListAtom);

  if (!map || !chargers) return null;

  /**
   *
   * @handleGetChargerList 충전소 id로 충전소 충전기 리스트를 가져오고 set으로 저장한다.
   */
  async function handleGetChargerList(statId: string) {
    try {
      const response = await getMapDetailList(statId);
      console.log(response);
      const result = response.data.items.item;
      setChargerResult(result);
    } catch (err) {
      console.log('에러:', err);
    }
  }

  return (
    <>
      {chargers.map((charger: Charger, idx) => (
        <Marker
          key={idx}
          map={map}
          lng={parseFloat(charger.lng)}
          lat={parseFloat(charger.lat)}
          url={markerImg}
          onClick={() => {
            setSelectCharger(charger);
            handleGetChargerList(charger.statId);
          }}
        />
      ))}
      {selectCharger && (
        <div>
          <Marker
            key={selectCharger.statId}
            map={map}
            lng={parseFloat(selectCharger.lng)}
            lat={parseFloat(selectCharger.lat)}
            url={activeMarkerImg}
            onClick={() => {
              setSelectCharger(null);
            }}
          />
          <MapChargerDetail />
        </div>
      )}
      <InfoWindow map={map} selectCharger={selectCharger} />
    </>
  );
}

export default MarkersContainer;
