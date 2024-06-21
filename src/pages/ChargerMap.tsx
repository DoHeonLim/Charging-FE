import Layout from '@/components/Layout/Layout';
import MapContainer from '@/components/Map/MapContainer';
import { useSetAtom } from 'jotai';
import { chargersAtom } from '@/atoms/chargerData';
import { chargers } from '@/data/chargers';
import MarkersContainer from '@/components/Map/MarkersContainer';
import { useEffect } from 'react';
import { MapForm } from '@/components/Map/MapForm';

function ChargerMap() {
  const setCharger = useSetAtom(chargersAtom);

  useEffect(() => {
    if (chargers) {
      setCharger(null);
    }
  }, []);

  return (
    <Layout>
      <div className='flex h-full relative'>
        <MapForm />
        <MapContainer />
        <MarkersContainer />
      </div>
    </Layout>
  );
}

export default ChargerMap;
