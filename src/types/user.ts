export type User = {
  user: {
    user_id: string;
    displayName: string;
    nickName: string;
  };
  userCars: Array<string>;
  message: string;
};
