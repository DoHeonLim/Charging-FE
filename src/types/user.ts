export type User = {
  user: {
    user_id: string;
    displayName: string;
    nickName: string;
  };
  userCars: Array<string>;
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
};
