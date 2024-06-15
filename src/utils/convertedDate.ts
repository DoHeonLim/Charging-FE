export const convertDate = (time: string) => {
  const date = `${time.substring(0, 4)}년 ${time.substring(4, 6)}월 ${time.substring(6, 8)}일 ${time.substring(8, 10)}시 ${time.substring(10, 12)}분 ${time.substring(12, 14)}초`;
  return date;
};

console.log(convertDate('20240615054301'));
