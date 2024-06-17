import Layout from '@/components/Layout/Layout';
import MapContainer from '@/components/Map/MapContainer';
import { useSetAtom } from 'jotai';
import { chargersAtom } from '@/atoms/chargerData';
import { chargers } from '@/data/chargers';
import MarkersContainer from '@/components/Map/MarkersContainer';
import { useEffect } from 'react';
import { MapForm } from '@/components/Map/MapForm';
import { Charger } from '@/types/charger';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function ChargerMap() {
  const setCharger = useSetAtom(chargersAtom);
  // const { status } = useQuery('chargers', () => axios.get<{ data: Charger[] }>('/api/chargers'), {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  useEffect(() => {
    if (chargers) {
      setCharger(null);
    }
  }, []);

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
