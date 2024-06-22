import { useEffect } from 'react';

/**
 * @width string
 * @height string
 * @initMap void | initMap 함수에는 맵 객체 들어온다.
 */
interface MapProps {
  width: string;
  height: string;
  initMap?: (map: naver.maps.Map) => void;
}

function Map({ width, height, initMap }: MapProps) {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.54638438930619, 127.06589003501536), // 엘리스 위치 new naver.maps.LatLng(37.54638438930619, 127.06589003501536)
      zoom: 18,
    };
    /**
     * @map map 객체 생성 (엘리스 위치로 해놨음)
     */
    const map = new naver.maps.Map('map', mapOptions);
    /**
     * initMap이 undefined될수 있기때문에 if문으로 체크 한 후 map 객체를 전역상태로 선언한다.
     */
    if (initMap) {
      initMap(map);
    }
  }, []);
  return <div id='map' style={{ width, height }}></div>;
}

export default Map;
