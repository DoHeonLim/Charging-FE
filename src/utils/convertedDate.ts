export const convertDate = (time: string) => {
  const date = `${time.substring(0, 4)}년 ${time.substring(4, 6)}월 ${time.substring(6, 8)}일 ${time.substring(8, 10)}시 ${time.substring(10, 12)}분 ${time.substring(12, 14)}초`;
  return date;
};

export const convertDate2 = (time: string) => {
  const parsedTime = new Date(time);
  const year = parsedTime.getFullYear();
  const month = parsedTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
  const day = parsedTime.getDate();
  const hours = parsedTime.getHours();
  const minutes = parsedTime.getMinutes();
  if (hours - 15 < 0) {
    const nighthours = hours - 3;
    const nightformattedTime = `${year}년 ${month}월 ${day}일 오후 ${nighthours}시 ${minutes}분 `;
    return nightformattedTime;
  } else {
    const dayhours = hours - 15;
    const dayformattedTime = `${year}년 ${month}월 ${day + 1}일 오전 ${dayhours}시 ${minutes}분 `;
    return dayformattedTime;
  }
};
