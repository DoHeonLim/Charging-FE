import { Charger } from '@/types/charger';
import { useEffect, useState } from 'react';
import InfoWindowCreate from './InfoWindowCreate';

interface InfoWindowProps {
  map: naver.maps.Map;
  selectCharger: Charger | null;
}

function InfoWindow({ map, selectCharger }: InfoWindowProps) {
  const [infoWindow, setInfoWindow] = useState<naver.maps.InfoWindow | null>(null);

  useEffect(() => {
    /**
     * @_infoWindow 인포윈도우 초기화 하기 위해서 선언(_는 위에서 선언한 infoWindow와 구별하기 위함)
     * @content 정보창의 콘텐츠
     * @backgroundColor 정보창의 배경색
     * @borderWidth 정보창의 테두리 두께
     * @disableAnchor 말풍선 꼬리의 유무
     * @pixelOffset 정보창의 위치 지정
     * @see https://navermaps.github.io/maps.js.ncp/docs/naver.maps.InfoWindow.html
     */
    const _infoWindow = new naver.maps.InfoWindow({
      content: '',
      backgroundColor: 'white',
      borderWidth: 0,
      disableAnchor: true,
      pixelOffset: new naver.maps.Point(10, 40),
    });

    setInfoWindow(_infoWindow);

    return () => {
      _infoWindow?.setMap(null);
    };
  }, []);

  useEffect(() => {
    if (!infoWindow || !map) return;
    /** 만약 마커를 클릭했다면 아래를 수행한다. */
    if (selectCharger) {
      /**
       * @position 정보창을 열 위치 지정
       */
      const position = new naver.maps.LatLng(
        parseFloat(selectCharger.lat),
        parseFloat(selectCharger.lng)
      );
      /**
       * @setContent 인포 윈도우를 열었을 때 보여지는 콘텐츠
       */
      infoWindow.setContent(InfoWindowCreate(selectCharger));
      /**
       * @open 인포 윈도우를 열 맵과 위치 정보
       */
      infoWindow.open(map, position);
      // 아니라면 인포윈도우를 닫는다.
    } else {
      infoWindow.close();
    }
  }, [selectCharger]);

  return null;
}

export default InfoWindow;
