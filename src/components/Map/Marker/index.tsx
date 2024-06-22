import { chargersAtom } from '@/atoms/chargerData';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

/**
 * @map 마커를 표시할 map 객체
 * @position 마커의 위치를 나타내는 지도 좌표 (lat:위도, lng:경도)
 * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.LatLng.html
 * @url 마커의 아이콘으로 사용할 이미지의 URL
 * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html#toc38__anchor
 * @onClick 마커 이벤트 등록(클릭시)
 * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
 */
//https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
interface MarkerProps {
  map: naver.maps.Map;
  lat: number;
  lng: number;
  url: string;
  onClick?: () => void;
}

function Marker({ map, lat, lng, url, onClick }: MarkerProps) {
  // chargers가 바뀔때마다 새로 렌더링한다.
  const chargers = useAtomValue(chargersAtom);
  useEffect(() => {
    let marker: naver.maps.Marker | null = null;

    if (map) {
      marker = new naver.maps.Marker({
        map,
        position: new naver.maps.LatLng(lat, lng),
        icon: {
          url,
        },
      });
    }

    if (onClick) {
      naver.maps.Event.addListener(marker, 'click', onClick);
      /**
       * @panTo 지정한 좌표를 중심점으로 지도를 이동, 이동거리 가깝다면 부드럽게 이동
       * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html#panTo__anchor
       */
      map.panTo({ lat, lng });
    }

    return () => {
      marker?.setMap(null);
    };
  }, [map, chargers]);
  return null;
}

export default Marker;
