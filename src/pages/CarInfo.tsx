import Layout from '@/components/Layout/Layout';
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from '@/components/ui/minimal-card';
import carImage from '../assets/images/d.png';

function CarInfo() {
  const cards = [
    {
      title: 'Sick title',
      description: 'How to design with gestures and motion that feel intuitive and natural.',
    },
    {
      title: 'Sick title',
      description: 'How to design with gestures and motion that feel intuitive and natural.',
    },
    {
      title: 'Sick title',
      description: 'How to design with gestures and motion that feel intuitive and natural.',
    },
    {
      title: 'Sick title',
      description: 'How to design with gestures and motion that feel intuitive and natural.',
    },
    {
      title: 'Sick title',
      description: 'How to design with gestures and motion that feel intuitive and natural.',
    },
  ];
  return (
    <Layout>
      <div>전기차 정보 게시판</div>
      <div className='w-full max-w-4xl'>
        <div className='min-h-[500px] p-4  flex flex-col justify-center  rounded-lg space-y-4'>
          <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
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
