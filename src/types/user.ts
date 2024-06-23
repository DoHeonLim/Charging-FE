export type User = {
  car: {
    brand: string;
    name: string;
  };
  user: string;
  user_id: string;
  user_img: string;
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
  profile_pic: string;
};
