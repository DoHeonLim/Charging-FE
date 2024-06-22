import { Charger } from '@/types/charger';

function InfoWindowCreate(selectCharger: Charger) {
  const infoWindowBox = document.createElement('div');
  infoWindowBox.className = 'w-30 h-10 mt-2 ml-2 mr-2 mb-4 text-center rounded-md';

  const infoWindowChargerName = document.createElement('div');
  infoWindowChargerName.className = 'text-xl';
  infoWindowChargerName.innerHTML = `${selectCharger.statNm}`;
  infoWindowBox.appendChild(infoWindowChargerName);

  const infoWindowAddr = document.createElement('div');
  infoWindowAddr.className = 'text-base';
  infoWindowAddr.innerHTML = `${selectCharger.addr}`;
  infoWindowBox.appendChild(infoWindowAddr);

  return infoWindowBox;
}

export default InfoWindowCreate;
