import Layout from '@/components/Layout/Layout';
import MapForm from '../components/Map/MapForm';
import MapContainer from '@/components/Map/MapContainer';
import { useSetAtom } from 'jotai';
import { chargersAtom } from '@/atoms/chargerData';
import { chargers } from '@/data/chargers';
import MarkersContainer from '@/components/Map/MarkersContainer';

function ChargerMap() {
  const setCharger = useSetAtom(chargersAtom);

  if (chargers) {
    setCharger(chargers);
  }

  return (
    <Layout>
      <div className='flex max-h-full relative'>
        <MapForm />
        <MapContainer />
        <MarkersContainer />
      </div>
    </Layout>
  );
}

export default ChargerMap;
