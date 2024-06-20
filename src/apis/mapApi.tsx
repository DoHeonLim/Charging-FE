import { Charger } from '@/types/charger';
import axios from 'axios';

let charger_key = import.meta.env.VITE_REACT_APP_CHARGER_KEY;
axios.defaults.withCredentials = true;

export const Search = (
  search: string,
  page: number,
  limit: number,
  zcode: string,
  chgerType: string
) =>
  axios.get<{ charger: Charger[] }, any>(
    `http://localhost:3000/maps/?page=${page}&limit=${limit}&station=${search}&zone=${zcode}&type=${chgerType}`
  );

export const List = (statId: string) =>
  axios.get<{
    items: any;
    charger: Charger;
  }>(
    `http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?numOfRows=10&dataType=JSON&statId=${statId}&serviceKey=${charger_key}`
  );
