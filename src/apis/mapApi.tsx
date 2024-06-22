import { Charger } from '@/types/charger';
import { Comments } from '@/types/user';
import axios from 'axios';

let charger_key = import.meta.env.VITE_REACT_APP_CHARGER_KEY;

const api = axios.create({
  baseURL: 'http://kdt-ai-10-team02.elicecoding.com/api',
  withXSRFToken: true,
  withCredentials: true,
});

export const getMapSearch = (
  search: string,
  page: number,
  limit: number,
  zcode: string,
  chgerType: string
) =>
  api.get<{ charger: Charger[] }, any>(
    `maps/?page=${page}&limit=${limit}&station=${search}&zone=${zcode}&type=${chgerType}`
  );

export const getMapDetailList = (statId: string) =>
  axios.get<{
    items: any;
    charger: Charger;
  }>(
    `http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?numOfRows=10&dataType=JSON&statId=${statId}&serviceKey=${charger_key}`
  );

export const getMapComments = (statId: string) =>
  api.get<{ comments: Comments[] }, any>(`map-comments/${statId}`);

export const postMapComments = (statId: string, comment: string) =>
  api.post<{ comments: Comments[] }, any>('map-comments', {
    stat_id: statId,
    comment: comment,
  });

export const PutMapComments = (comment_id: number, comment: string) =>
  api.put<{ comments: Comments[] }, any>(`map-comments/${comment_id}`, {
    comment: comment,
  });

export const DeleteMapComments = (comment_id: number) =>
  api.delete<{ comments: Comments[] }, any>(`map-comments/${comment_id}`);
