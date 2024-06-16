import { Charger } from '@/types/charger';

/**
  @zcode 시도 코드
  @city 도시 명
*/
const zcodeList = [
  { zcode: '11', city: '서울' },
  { zcode: '26', city: '부산' },
  { zcode: '27', city: '대구' },
  { zcode: '28', city: '인천' },
  { zcode: '29', city: '광주' },
  { zcode: '30', city: '대전' },
  { zcode: '31', city: '울산' },
  { zcode: '36', city: '세종' },
  { zcode: '41', city: '경기' },
  { zcode: '51', city: '강원' },
  { zcode: '43', city: '충북' },
  { zcode: '44', city: '충남' },
  { zcode: '52', city: '전북' },
  { zcode: '46', city: '전남' },
  { zcode: '47', city: '경북' },
  { zcode: '48', city: '경남' },
  { zcode: '50', city: '제주' },
];

/**
  type : 타입 코드
  charger : 충전기 타입
*/
const chargerTypeList = [
  { type: '01', charger: 'DC차데모' },
  { type: '02', charger: '완속' },
  { type: '03', charger: 'DC차데모 + AC3상' },
  { type: '04', charger: 'DC콤보' },
  { type: '05', charger: 'DC차데모 + DC콤보' },
  { type: '06', charger: 'DC차데모 + AC3상 + DC콤보' },
  { type: '07', charger: 'AC3상' },
];

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
