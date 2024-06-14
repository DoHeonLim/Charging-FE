import Layout from '@/components/Layout/Layout';
import MapForm from '../components/Map/MapForm';

import { Map } from 'react-kakao-maps-sdk';

function ChargerMap() {
  // 엘리스 위치
  const lat = 37.54638438930619;
  const lng = 127.06589003501536;

  return (
    <Layout>
      <div className='flex max-h-screen'>
        <MapForm />

        <Map // 지도를 표시할 Container
          id='map'
          center={{
            // 지도의 중심좌표
            lat: lat,
            lng: lng,
          }}
          style={{
            // 지도의 크기
            width: '80%',
            height: '950px',
          }}
          level={3} // 지도의 확대 레벨
        />
      </div>
    </Layout>
  );
}

export default ChargerMap;
