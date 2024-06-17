import { Charger } from '@/types/charger';

/**
 * @code 시설 코드
 * @accommodation 시설 종류
 */
const chargerKindList = [
  { code: 'A0', accommodation: '공공시설' },
  { code: 'B0', accommodation: '주차시설' },
  { code: 'C0', accommodation: '휴게시설' },
  { code: 'D0', accommodation: '관광시설' },
  { code: 'E0', accommodation: '상업시설' },
  { code: 'F0', accommodation: '차량정비시설' },
  { code: 'G0', accommodation: '기타시설' },
  { code: 'H0', accommodation: '공동주택시설' },
  { code: 'I0', accommodation: '근린생활시설' },
  { code: 'J0', accommodation: '교육문화시설' },
];

const chargerStatList = [
  { code: '1', stat: '통신이상' },
  { code: '2', stat: '충전대기' },
  { code: '3', stat: '충전중' },
  { code: '4', stat: '운영중지' },
  { code: '5', stat: '점검중' },
  { code: '9', stat: '상태미확인' },
];

function findAccommodationByCode(code: Charger['kind']) {
  const foundItem = chargerKindList.find((item) => item.code === code);
  return foundItem?.accommodation;
}

function findStatByCode(code: Charger['stat']) {
  const foundItem = chargerStatList.find((item) => item.code === code);
  return foundItem?.stat;
}

export { findAccommodationByCode, findStatByCode };
