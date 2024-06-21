import trash from '../assets/images/trash.png';
import interaction from '../assets/images/interaction.png';
import sing from '../assets/images/sing.png';
import overtake from '../assets/images/overtake.png';
import navi from '../assets/images/navi.png';
import chair from '../assets/images/chair.png';
import tools from '../assets/images/tools.png';
import promise from '../assets/images/promise.png';
import driving from '../assets/images/driving.png';
import accident from '../assets/images/accident.png';
import oil from '../assets/images/oil.png';
import chat from '../assets/images/chat.png';

import ev6 from '../assets/images/ev6.png';
import model3 from '../assets/images/model-3.png';
import gv70 from '../assets/images/ev6.png';
import ioniq5 from '../assets/images/ev6.png';
import polestar from '../assets/images/ev6.png';
import mach from '../assets/images/ev6.png';
import ix3 from '../assets/images/ev6.png';
import id4 from '../assets/images/ev6.png';
import ioniq6 from '../assets/images/ev6.png';
import etron from '../assets/images/ev6.png';
import modelY from '../assets/images/ev6.png';
import xc40 from '../assets/images/ev6.png';
import ux300e from '../assets/images/ev6.png';
import taycan from '../assets/images/ev6.png';
import eqc from '../assets/images/ev6.png';
import leaf from '../assets/images/ev6.png';

export const questions = [
  {
    index: 1,
    question: '내차의 청결상태는?',
    choices: {
      p: '어제 먹다 남은 음료수 캔도 그대로 남아있다.',
      j: '누가봐도 깔끔하게 항상 정돈되어 있다.',
    },
    src: trash,
  },
  {
    index: 2,
    question: '사람들과의 상호작용을 하면',
    choices: {
      e: '에너지를 얻는다.',
      i: '에너지를 소모한다.',
    },
    src: interaction,
  },
  {
    index: 3,
    question: '나는 차에서 노래를',
    choices: {
      e: '노래방보다 더 신나게 부른다.',
      i: '그냥 허전해서 듣는다.',
    },
    src: sing,
  },
  {
    index: 4,
    question: '정체구간에서 깜빡이 넣고 힘겹게 끼어들기 하려는 차량이 있다면?',
    choices: {
      f: '초보인가? 불쌍해서 넣어준다.',
      t: '상습범이 분명해! 절대 안 넣어준다.',
    },
    src: overtake,
  },
  {
    index: 5,
    question: '내비게이션이 알려주는 길을',
    choices: {
      n: '거의 다 따라서 간다.',
      s: '내가 더 빠르다고 생각하는 길을 간다.',
    },
    src: navi,
  },
  {
    index: 6,
    question: '나는 조수석에 타면',
    choices: {
      s: '인간 내비게이션이 되어 운전자를 도와준다.',
      n: '군말없이 조용히 있는다.',
    },
    src: chair,
  },
  {
    index: 7,
    question: '내 차에 있는 기능을',
    choices: {
      n: '한번씩 다 써보려고 한다.',
      s: '쓰는 것만 쓴다.',
    },
    src: tools,
  },
  {
    index: 8,
    question: '나는 약속시간을',
    choices: {
      j: '교통체증까지 미리 계산해서 지킨다.',
      p: '5분 이상 늦는 편이다.',
    },
    src: promise,
  },
  {
    index: 9,
    question: '내가 생각하는 내 운전실력은',
    choices: {
      t: '운전경력에 비해 꽤나 잘한다.',
      f: '잘 하진 않는다. 조심히 한다.',
    },
    src: driving,
  },
  {
    index: 10,
    question: '지인이 사고가 났다면 내가 할 말은',
    choices: {
      f: '어디 다치신데는 없으셨어요?',
      t: '보험은 드셨어요?',
    },
    src: accident,
  },
  {
    index: 11,
    question: '엔진오일 교체주기를',
    choices: {
      j: '잘 챙기는 편이다.',
      p: '어라 뭔가 이상한데? 할 때 바꾼다.',
    },
    src: oil,
  },
  {
    index: 12,
    question: '운전중에 나는 다른사람과',
    choices: {
      e: '대화하는 것을 즐긴다.',
      i: '대화하지 않고 혼자 조용히 운전한다.',
    },
    src: chat,
  },
];

export const resultMBTI = [
  {
    mbti: 'ENFP',
    tendency: '흥이 난다, 흥이 나~! 내 차 안 월드스타!',
    road: '적당히 막히는 고속도로',
    description:
      '평소 흥이 많다는 소리를 많이 듣는 당신, 가만히 있어도 ‘무슨 좋은 일있어요?, 기분 좋아보여요~’라고 자주 듣는 편이죠. 인생을 즐겁게 사는 당신은 시동을 켤때부터 끌때까지 노래를 부르시군요 (이쯤되면 차가 아니라 노래방을 산 게 아닌지…) 그닥 친하지 않은 사람이 차를 태워달라고해도 거절하지 못합니다. 모두 잘지내는게 좋다고 생각하기 때문에 비호감만 아니면 왠만하면 태워주는 편! 하지만 친절을 베풀고 생색내는편 이네요~',
    recommendCar: 'EV6',
    reason: '신나고 활동적인 ENFP에게는 세련된 디자인과 뛰어난 성능을 가진 EV6가 잘 어울립니다.',
    src: ev6,
    best: 'INTJ',
    worst: 'ISTP',
  },
  {
    mbti: 'ENTP',
    tendency: '항상 새로운 아이디어가 넘치는 창의적인 혁신가',
    road: '복잡한 도시의 이면도로.',
    description:
      '독창적이고 창의적인 당신은 언제나 새로운 아이디어와 기회를 찾아나섭니다. 갑작스런 변화와 새로운 환경에서 빛을 발하며, 운전 중에도다양한 경로를 시도하며 길을 찾는 것을 즐깁니다. 누군가 당신의 차에탑승할 때마다, 새롭게 발견한 곳이나 이야기를 자랑스럽게 공유합니다.',
    recommendCar: '테슬라 모델3',
    reason:
      '창의적이고 혁신적인 ENTP는 최신기술과 긴 주행거리를 제공하는 테슬라 모델 3가 잘 맞습니다.',
    src: model3,
    best: 'INFJ',
    worst: 'ISFP',
  },
  {
    mbti: 'ENTJ',
    tendency: '명확한 목표와 강력한 리더십',
    road: '효율적으로 짜여진 고속도로.',
    description:
      '당신은 언제나 명확한 목표를 가지고 있으며, 리더십을 발휘하여 계획을 추진합니다. 운전 중에도 가장 빠르고 효율적인 길을 찾아내는 능력이 탁월합니다. 항상 앞서가는 당신은 다른 차들이 따라오지 못하게 할 때까지 계속 질주합니다.',
    recommendCar: 'Electrified GV70',
    reason:
      '강력한 리더십과 전략적인 ENTJ에게는 고급스러운 디자인과 첨단 기술이 적용된 제네시스 Electrified GV70이 적합합니다.',
    src: gv70,
    best: 'INTP',
    worst: 'ISFJ',
  },
  {
    mbti: 'ENFJ',
    tendency: '따뜻한 오지라퍼',
    road: '한적한 해안도로',
    description:
      '누가봐도 너무 착한 당신! 억지로 끼어드려는 차량까지 왠만하면 다 양보해주는 편이네요. 하지만 양보했는데 상대차량이 고마움의 표시도 없이 숭~지나가면 속상해 합니다. 난폭운전을 하는 운전자를 만나도 싸움 나기 싫어 피하는 당신, 그대신 블랙박스를 돌려 스마트국민제보로 신고하는 편입니다. 내가 당했을 때보다 남이 당했을 때 더 분한 당신! 때로는 오지랖이 넓다는 소리도 듣지만 선의의 도움을 주는 착한 사람이군요!',
    recommendCar: '아이오닉 5',
    reason:
      '따뜻하고 배려심 많은 ENFJ에게는 넉넉한 실내 공간과 친환경적인 아이오닉 5가 어울립니다.',
    src: ioniq5,
    best: 'ISTP',
    worst: 'ISTJ',
  },
  {
    mbti: 'ESFP',
    tendency: '운전을하는 이 순간, 나는 바람과 하나야~!',
    road: '바닷바람이 느껴지는 해안도로',
    description:
      '누가봐도 자유분방한 당신! 틀에 박힌 것을 싫어하죠. 그래서 그런지 답답한 사무실보단 바깥에서 일하는게 잘 어울리는 사람! 사람들과 이야기하는 걸 좋아해서 어떤 차를 살까 고민할 때도 최대한 많은 사람들에게 동네방네소문내고 의견을 물어보는 편, 그만큼 귀도 얇아서 살려고 하는 차가 매번 바뀌어요. 하지만 이것저것 골치아프게 생각하는 게 싫어서 차를 고를땐 매번 내가 처음 생각했던 그 차를 살 확률이 높네요!',
    recommendCar: '폴스타 2',
    reason: '자유분방하고 활동적인 ESFP는 고성능과 독특한 디자인을 가진 폴스타 2가 적합합니다.',
    src: polestar,
    best: 'ISTJ',
    worst: 'INTP',
  },
  {
    mbti: 'ESTP',
    tendency: '신차 나오면 제일 먼저 찾아보는 얼리카답터',
    road: '방금 깔린 아스팔트 위',
    description:
      '신차가 나오면 시승기를 찾아보는게 제일 재밌는 당신! 스포츠 게임을 좋아하기 때문에 운전도 나름대로 재미를 느끼네요. 새로운 것에 대한 욕구가 강하기 때문에 어디 재밌는 곳이 생겼다고 하면 꼭 찾아가고 싶어하는 당신. 경쟁심이 있어서 운전을 잘하고 못하고를 떠나서 내 주변에 있는 ‘누구’보단 잘하고 싶어해요.',
    recommendCar: '머스탱 마하-E',
    reason:
      '모험을 즐기고 실용적인 ESTP는 강력한 성능과 스포티한 디자인을 갖춘 머스탱 마하-E가 어울립니다',
    src: mach,
    best: 'ISFJ',
    worst: 'INFP',
  },
  {
    mbti: 'ESTJ',
    tendency: '내 차는 내가 관리한다. 잘 관리된 차의 오너',
    road: '도시의 바쁨이 느껴지는 수도권 한복판',
    description:
      '운전에 큰 흥미가 없군요! 운전할 시간에 스케줄을 확인하거나 휴식을 취하는게 더‘효율’적일 것이라고 생각하는 편! 하지만 한번 관리를 시작하면 계획적이고 규칙적인 스타일이라 내 차의 물건은 꼭 내가 아는 그 자리에 있어야 직성이 풀리는 성격. 엔진오일은 물론 와이퍼, 타이어, 브레이크 패드 등등.. 내 차 소모품 주기를 철저히 챙겨요. 도시의 바쁜 일상을 나름 적응하며 즐기지만, 차가 조금이라도막히는 걸 싫어해요. 그래서 퇴근도 교통체증이 없는 시간에 맞춰서하는 편이네요.',
    recommendCar: 'BMW iX3',
    reason: '조직적이고 책임감이 강한 ESTJ에게는 효율적이고 프리미엄 SUV인 BMW iX3이 적합합니다.',
    src: ix3,
    best: 'ISFP',
    worst: 'INFJ',
  },
  {
    mbti: 'ESFJ',
    tendency: '인자한 운전기사님. 운전은 제가 할게요~!',
    road: '신호체계가 딱 잡힌 교차로',
    description:
      '항상 자신보다 남을 먼저 생각하는 당신, 모든가 피곤한 상황 누군가 운전기사가 되어야 한다면 기꺼이 운전을 도맡아하네요. 주변에 신뢰도도 높아서 주변사람들도 믿고 운전을 맡기는 편! 차가 막혀도 짜증을 내기보단 왜 차가 막혔을까? 부터 생각하는 현실적이고 이성적인 사람! 혼자서 운전하는 것 보단 여러 사람과 차를 타며 이야기를 나누는 걸 재밌어해요.',
    recommendCar: '폭스바겐 ID.4',
    reason:
      '협조적이고 사교적인 ESFJ에게는 넓은 공간과 다목적용으로 적합한 폭스바겐 ID.4가 잘 맞습니다.',
    src: id4,
    best: 'ISTP',
    worst: 'INTJ',
  },
  {
    mbti: 'INFP',
    tendency: '확고한 나만의 세계, 마이웨이',
    road: '방금 깔린 아스팔트 위',
    description:
      '지금 무슨 차를 탔던 간에 사람들이 추천한 차보다 자신이 원했던 차를 샀을 유형. 다른 사람의 기준에 맞추기보단 나만의 기준이 확실해요. 관대하고 너그러운 마음씨를 가지고 있어서 동승자가 내 차에 타서 차를 더럽히거나 이것 저것 만져서 거슬려도 크게 뭐라고 하지 않아요. 하지만 차 밖에 있는 얌체같은 운전자들에겐 혼잣말로 궁시렁 대는 타입.',
    recommendCar: '아이오닉 6',
    reason: '이상적이고 감성적인 INFP에게는 세단형으로 스타일리시한 아이오닉 6가 어울립니다.',
    src: ioniq6,
    best: 'ENFJ',
    worst: 'ESTP',
  },
  {
    mbti: 'INTP',
    tendency: '분석적이고 이론적인 사고의 대가',
    road: '복잡한 교차로',
    description:
      '논리적이고 분석적인 당신은 복잡한 문제를 해결하는 것을 좋아합니다. 교차로에서 다양한 길을 탐색하며 최적의 경로를 계산하는 것을 즐깁니다. 운전 중에도 차의 성능과 경로를 분석하며, 최적의 선택을 하기 위해 항상 다양한 가능성을 생각합니다.',
    recommendCar: '아우디 e-트론 GT',
    reason:
      '분석적이고 이론적인 INTP에게는 고성능과 혁신적인 디자인을 가진 아우디 e-트론 GT가 적합합니다.',
    src: etron,
    best: 'ENTJ',
    worst: 'ESFP',
  },
  {
    mbti: 'INTJ',
    tendency: '전략적 사고와 계획을 중시하는 장기적인 플래너',
    road: '전략적으로 배치된 도시의 주요 도로.',
    description:
      '당신은 모든 일에 계획이 있으며, 장기적인 전략을 중요하게 여깁니다. 운전할 때도 장기적인 경로 계획을 세워 최적의 길을 찾는 데 능합니다. 항상 미래를 바라보며 지금의 선택이 어떻게 영향을 미칠지 고민합니다.',
    recommendCar: '테슬라 모델 Y',
    reason:
      '전략적이고 계획적인 INTJ에게는 긴 주행거리와 최신 기술이 적용된 테슬라 모델 Y가 잘 맞습니다.',
    src: modelY,
    best: 'ENFP',
    worst: 'ESFJ',
  },
  {
    mbti: 'INFJ',
    tendency: '깊이있는 직관과 공감을 통한 이해',
    road: '고요하고 평화로운 숲길',
    description:
      '당신은 깊이 있는 직관과 공감 능력으로 상황을 이해하고, 조용한 환경에서 생각에 잠기기를 좋아합니다. 숲길을 달리며 혼자만의 시간을 가지면서 내면의 생각을 정리하고, 세상의 의미를 탐구하는 시간을 즐깁니다.',
    recommendCar: '볼보 XC40 리차지',
    reason:
      '공감적이고 직관적인 INFJ에게는 안전성과 고급스러움을 겸비한 볼보 XC40 리차지가 어울립니다.',
    src: xc40,
    best: 'ENTP',
    worst: 'ESTJ',
  },
  {
    mbti: 'ISFP',
    tendency: '관대하고 친절한 낭만러',
    road: '서행하는 길',
    description:
      '좋은 사람이라는 소리를 자주 듣는 당신좋은 사람이라는 소리를 자주 듣는 당신~ 운전하면서 화나는 상황도 그려러니 넘어가요. 남에 대한 포용력이 높기 때문이에요. 내가 아는 빠른 길이 있어도 동승자가 다른 길을 안다고 하면 의아해도 따라가주는 성격! 하지만 개인주의적인 성향이 강해서 내 물건을 막 만지는 걸 특히나 싫어해요. 비오는날 눈오는날 햇살이 좋은 날 모두 감성을 즐길 줄 아는 낭만쟁이',
    recommendCar: '렉서스 UX 300e',
    reason: '감성적이고 친절한 ISFP에게는 프리미엄 컴팩트 SUV인 렉서스 UX 300e가 적합합니다.',
    src: ux300e,
    best: 'ESTJ',
    worst: 'ENTP',
  },
  {
    mbti: 'ISTP',
    tendency: '문제해결에 능한 실용주의자',
    road: '도전적인 오프로드',
    description:
      '당신은 실용적이고 문제 해결 능력이 뛰어납니다. 오프로드를 달리며 차량의 성능을 테스트하고, 도전적인 상황을 극복하는 것을 즐깁니다. 차량의 다양한 기능을 활용하며, 필요할 때 즉흥적으로 대처하는 능력이 뛰어납니다.',
    recommendCar: '포르쉐 타이칸',
    reason:
      '실용적이고 문제 해결 능력이 뛰어난 ISTP에게는 고성능과 정밀한 조작성을 제공하는 포르쉐 타이칸이 잘 맞습니다.',
    src: taycan,
    best: 'ESFJ',
    worst: 'ENFP',
  },
  {
    mbti: 'ISTJ',
    tendency: '신뢰할 수 있는 책임감 있는 실천가',
    road: '질서정연한 시골 도로',
    description:
      '신뢰성과 책임감이 강한 당신은 계획된 경로를 따라가는 것을 선호합니다. 시골 도로를 차분하게 달리며, 정돈된 환경에서 안정을 느낍니다. 주어진 규칙을 준수하며, 예측 가능한 상황을 선호합니다.',
    recommendCar: '메르세데스-벤츠 EQC',
    reason:
      '신뢰할 수 있고 계획적인 ISTJ에게는 고급스럽고 신뢰성이 높은 메르세데스-벤츠 EQC가 적합합니다.',
    src: eqc,
    best: 'ESFP',
    worst: 'ENFJ',
  },
  {
    mbti: 'ISFJ',
    tendency: '바리바리 짐싸고 다니는 보부상',
    road: '내가 원래 아는 길',
    description:
      '집순이라서 차는 출퇴근용 또는 정말 필요할 때만 타요. 하지만 한번 여행을 가려면 이것저것 빠짐없이 다 챙겨서 어느새 트렁크가 꽉차요. 가방을 들때도 별거별거 다챙겨서 보부상이란 말을 종종 듣는군요. 그렇다고 지저분하게 이리저리 짐을 두진 않아요. 여러 사람과 차를 같이 타는 건 좋아하지 않아요. 자신의 차를 누군가와 타야한다면 단 한명만 허용하고 싶은 당신!',
    recommendCar: '닛산 리프',
    reason: '신중하고 배려심 많은 ISFJ에게는 컴팩트하고 경제적인 닛산 리프가 잘 맞습니다.',
    src: leaf,
    best: 'ESTP',
    worst: 'ENTJ',
  },
];
