import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// 임시 데이터: 실제 데이터는 백엔드에서 가져올 수 있습니다.
const carData = {
  manufacturers: ['현대', '기아', 'BMW'] as const,
  models: {
    현대: ['제네시스', '소나타', '투싼'],
    기아: ['K3', 'K5', '스포티지'],
    BMW: ['X3', 'X5', '3 시리즈']
  } as const,
  images: {
    제네시스: '../assets/images/제네시스.svg',
    소나타: '/images/sonata.jpg',
    투싼: '/images/tucson.jpg',
    K3: '/images/k3.jpg',
    K5: '/images/k5.jpg',
    스포티지: '/images/sportage.jpg',
    '3 시리즈': '/images/3series.jpg',
    X3: '/images/x3.jpg',
    X5: '/images/x5.jpg'
  } as const
};

type Manufacturer = typeof carData.manufacturers[number];
type Model = keyof typeof carData.images;

const ProfileCard2: React.FC = () => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<Manufacturer | ''>('');
  const [selectedModel, setSelectedModel] = useState<Model | ''>('');
  const [selectedCarImage, setSelectedCarImage] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const defaultImage = '/images/default.jpg'; // 기본 이미지 경로를 정확히 설정

  const handleSave = () => {
    if (selectedModel && carData.images[selectedModel]) {
      setSelectedCarImage(carData.images[selectedModel]);
      alert('저장되었습니다.');
      setDialogOpen(false); // 다이얼로그 닫기
    } else {
      alert('차량을 선택해 주세요.');
    }
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>보유 차량</CardTitle>
        <CardDescription>차량을 선택하세요.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-full flex justify-center mb-4">
          <img
            src={selectedCarImage || defaultImage}
            alt="Selected Car"
            className="w-40 h-24 object-cover rounded-lg"
          />
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
            >
              차량 선택
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>차량 선택</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="manufacturer" className="text-sm font-medium">
                  자동차 제조사
                </label>
                <Select
                  onValueChange={(value: Manufacturer) => setSelectedManufacturer(value)}
                  value={selectedManufacturer}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="제조사를 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {carData.manufacturers.map((manufacturer) => (
                        <SelectItem key={manufacturer} value={manufacturer}>
                          {manufacturer}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="model" className="text-sm font-medium">
                  차량 모델
                </label>
                <Select
                  onValueChange={(value: Model) => setSelectedModel(value)}
                  value={selectedModel}
                  disabled={!selectedManufacturer}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="모델을 선택해 주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {selectedManufacturer &&
                        carData.models[selectedManufacturer].map((model) => (
                          <SelectItem key={model} value={model as Model}>
                            {model}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={handleSave}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
              >
                저장
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ProfileCard2;