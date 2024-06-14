import Layout from '@/components/Layout/Layout';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';
import carImage from '../assets/images/d.png';
import { Dock, DockIcon } from '@/components/ui/dock';
import Icons from '@/assets/images/car-logo/car-logo';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
// export type IconProps = React.HTMLAttributes<SVGElement>;

function CarInfo() {
  const cards = [
    {
      title: '기아 EV3',
      description: '2024.06 출시 | 소형SUV | 복합전비 5.1~5.4km/kWh',
    },
    {
      title: '테슬라 Model 3 Highland',
      description: '2024.04 출시 | 준중형 | 복합전비 4.8~5.7km/kWh',
    },
    {
      title: '현대 더 뉴 아이오닉5',
      description: '2024.03 출시 | 중형SUV | 복합전비 4.4~5.2km/kWh',
    },
    {
      title: 'KGM 토레스 EVX',
      description: '2023.09 출시 | 중형 | 복합전비 4.8',
    },
    {
      title: 'Sick title',
      description: 'How to design with',
    },
    // {
    //   title: 'Sick title',
    //   description: 'How to design with
    // {
    //   title: 'Sick title',
    //   description: 'How to design with ',
    // },
  ];
  // const [show, setShow] = useState(false);
  return (
    <Layout>
      <title className='flex justify-center text-2xl'>전기차 정보 게시판</title>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            <DockIcon className='hover:[filter:blur(3px)]'>
              <Icons.hyundai
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kia
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.genesis
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.kgm
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.daechang
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeis
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dpeco
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.cevo
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.maiv
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evkmc
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.smartev
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.evion
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.mobilitynetworks
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent side='top' className='flex justify-center'>
          국내 전기차 브랜드
        </HoverCardContent>
      </HoverCard>
      <HoverCard openDelay={0.2} closeDelay={0.2}>
        <HoverCardTrigger asChild>
          <Dock>
            <DockIcon>
              <Icons.bmw
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.benz
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.audi
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.tesla
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volkswagen
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.byd
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lotus
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.polestar
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.volvo
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lexus
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.lucid
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rivian
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.dongfeng
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.rollsroyce
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.porsche
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ford
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.jeep
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.peugeot
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
            <DockIcon>
              <Icons.ds
                className='h-6 w-6'
                onClick={() => {
                  alert('정상작동');
                }}
              />
            </DockIcon>
          </Dock>
        </HoverCardTrigger>
        <HoverCardContent className='flex justify-center'>해외 전기차 브랜드</HoverCardContent>
      </HoverCard>
      <div className='w-full max-w-8xl flex justify-center'>
        <div className='min-h-[100px] p-4 rounded-lg'>
          <div className='relative grid grid-cols-1 sm:grid-rows-2 lg:grid-cols-3 gap-4'>
            {cards.map((card) => (
              <MinimalCard>
                <MinimalCardImage src={carImage} alt={card.title} />
                <MinimalCardTitle>{card.title}</MinimalCardTitle>
                <MinimalCardDescription>{card.description}</MinimalCardDescription>
              </MinimalCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CarInfo;
