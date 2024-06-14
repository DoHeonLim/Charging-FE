import axios from 'axios';

let charger_key = import.meta.env.VITE_REACT_APP_CHARGER_KEY;

export const api = axios.create({
  baseURL: 'http://apis.data.go.kr',
  params: {
    serviceKey: charger_key,
    numOfRows: 10,
    pageNo: 169,
    dataType: 'JSON',
  },
});

export const mapApi = {
  list: () => api.get('B552584/EvCharger/getChargerInfo'),
  search: (charger_id: string) => api.get(`B552584/EvCharger/getChargerInfo&statId=${charger_id}`),
};
