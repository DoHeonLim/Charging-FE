import { mapAtom } from '@/atoms/map';
import Map from './Map';
import { useSetAtom } from 'jotai';
import { selectChargerAtom } from '@/atoms/chargerData';

function MapContainer() {
  /**
   * Atom에서 state를 변경할수 있는 훅은 useSetAtom을 활용한다.
   * @setMap map객체를 선언한다.
   */
  const setMap = useSetAtom(mapAtom);
  /**
   * map 객체에서 사용할수 있는 함수를 선언해줘야 하기 때문에 initMap을 선언한다.
   * initMap에서 map 객체를 받아온다.
   * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
   * 위 링크에서 Properties 참조
   *
   */
  const setSelectCharger = useSetAtom(selectChargerAtom);

  const initMap = (map: naver.maps.Map) => {
    setMap(map);
    naver.maps.Event.addListener(map, 'click', () => {
      // 맵을 클릭하면 infoWindow부분이 꺼지는 기능
      setSelectCharger(null);
    });
  };

  return <Map width='90%' height='57rem' initMap={initMap} />;
}

export default MapContainer;
