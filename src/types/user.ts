export type User = {
  user_id: string;
  user: string;
  car: {
    brand: string;
    name: string;
  };
  car_img: string;
  message: string;
};

export type Comments = {
  comment: string;
  created_at: Date;
  deleted_at: Date | null;
  id: number;
  stat_id: string;
  updated_at: Date | null;
  user_id: string;
  nickName: string;
};
