import React, { useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import { MBTIAtom } from '@/atoms/MBTI';
import { useNavigate } from 'react-router-dom';
import { questions } from '@/data/MBTI';

const resultAtom = atom([
  { type: 'e', count: 0 },
  { type: 'i', count: 0 },
  { type: 'n', count: 0 },
  { type: 's', count: 0 },
  { type: 't', count: 0 },
  { type: 'f', count: 0 },
  { type: 'j', count: 0 },
  { type: 'p', count: 0 },
]);

const MBTIForm: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [result, setResult] = useAtom(resultAtom);
  const [MBTI, setMBTI] = useAtom(MBTIAtom);
  const navigate = useNavigate();

  const navigateToMBTITest = () => {
    navigate('/mbti/result');
  };

  function isMBTI(result: any): string {
    const eCount = result.find((item: { type: string }) => item.type === 'e')?.count || 0;
    const iCount = result.find((item: { type: string }) => item.type === 'i')?.count || 0;
    const nCount = result.find((item: { type: string }) => item.type === 'n')?.count || 0;
    const sCount = result.find((item: { type: string }) => item.type === 's')?.count || 0;
    const fCount = result.find((item: { type: string }) => item.type === 'f')?.count || 0;
    const tCount = result.find((item: { type: string }) => item.type === 't')?.count || 0;
    const jCount = result.find((item: { type: string }) => item.type === 'j')?.count || 0;
    const pCount = result.find((item: { type: string }) => item.type === 'p')?.count || 0;

    const isEorI = eCount - iCount > 0 ? 'E' : 'I';
    const isNorS = nCount - sCount > 0 ? 'N' : 'S';
    const isForT = fCount - tCount > 0 ? 'F' : 'T';
    const isJorP = jCount - pCount > 0 ? 'J' : 'P';

    const mbti = isEorI + isNorS + isForT + isJorP;

    return mbti;
  }

  /**
   * @handleNextQuestion 질문 마지막까지 진행 후 모든 질문이 끝나면 MBTI를 세팅하고 결과 페이지로 이동한다.
   */
  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setMBTI(isMBTI(result));
      navigateToMBTITest();
    }
  };

  useEffect(() => {
    setMBTI(null);
  }, [MBTI]);

  const currentQuestion = questions[questionIndex];

  return (
    <div className='flex content-center justify-center '>
      <div>
        <Card className='w-[800px] h-[550px] mt-[200px] mb-[200px]'>
          <CardHeader className='ml-12'>
            <CardTitle className='text-5xl'>Q{currentQuestion.index}.</CardTitle>
            <CardTitle className='text-3xl'>{currentQuestion.question}</CardTitle>
          </CardHeader>
          {Object.entries(currentQuestion.choices).map(([choiceKey, choiceText]) => (
            <CardContent key={choiceKey} className='flex justify-center'>
              <Button
                className='w-[650px] h-[50px] text-2xl font-bold hover:bg-orange-400 focus:bg-orange-400 focus:text-white'
                onClick={() => {
                  handleNextQuestion();
                  setResult((prev) => {
                    const updatedResult = prev.map((item) => {
                      if (item.type === choiceKey) {
                        return { ...item, count: item.count + 1 };
                      }
                      return item;
                    });
                    return updatedResult;
                  });
                }}
              >
                {choiceText}
              </Button>
            </CardContent>
          ))}
          <div className='flex content-center justify-center'>
            <img src={currentQuestion.src} className='w-48' />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MBTIForm;
