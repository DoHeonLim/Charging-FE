import combo from '../../assets/images/combo-check.png';
import combo_yellow from '../../assets/images/combo-available.png';
import chademo from '../../assets/images/chademo-check.png';
import chademo_yellow from '../../assets/images/chademo-available.png';
import ac3 from '../../assets/images/ac3-check.png';
import ac3_yellow from '../../assets/images/ac3-available.png';
import ac from '../../assets/images/ac-check.png';
import ac_yellow from '../../assets/images/ac-available.png';

export function MapChargerStat(stat: string) {
  let chargerImgs = [];

  if (stat === '01') {
    // 차데모
    chargerImgs = [combo, chademo_yellow, ac3, ac];
  } else if (stat === '02') {
    // 완속
    chargerImgs = [combo, chademo, ac3, ac_yellow];
  } else if (stat === '03') {
    // 차데모 3상
    chargerImgs = [combo, chademo_yellow, ac3_yellow, ac];
  } else if (stat === '04') {
    // 콤보
    chargerImgs = [combo_yellow, chademo, ac3, ac];
  } else if (stat === '05') {
    // 차데모 콤보
    chargerImgs = [combo_yellow, chademo_yellow, ac3, ac];
  } else if (stat === '06') {
    // 차데모 3상 콤보
    chargerImgs = [combo_yellow, chademo_yellow, ac3_yellow, ac];
  } else {
    // 3상
    chargerImgs = [combo, chademo, ac3_yellow, ac];
  }

  return (
    <div className='flex'>
      {chargerImgs.map((item, idx) => (
        <img key={idx} src={item} alt={item} className='h-16 w-16 mr-2 md-2 mt-2'></img>
      ))}
    </div>
  );
}
