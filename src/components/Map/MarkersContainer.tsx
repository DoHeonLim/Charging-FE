import { chargersAtom, selectChargerAtom } from '@/atoms/chargerData';
import { mapAtom } from '@/atoms/map';
import { Charger } from '@/types/charger';
import { useAtom, useAtomValue } from 'jotai';
import Marker from './Marker';
import markerImg from '../../assets/images/charger-marker.png';
import activeMarkerImg from '../../assets/images/charger-marker-active.png';
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

  if (!map || !chargers) return null;

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
    </>
  );
}

export default MarkersContainer;
