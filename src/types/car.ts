export type Car = {
  id: number;
  name: string;
  brand: string;
  model_year: number;
  fuel_efficiency: string;
  car_type: string;
  max_distance: string;
  capacity: string;
  deleted_at: Date | null;
};
export type CarImage = {
  car_id: number;
  img_url: string;
};
export type CarReview = {
  review_id: number;
  user_id: string;
  content: string;
  reactionCount: number;
  profile_pic: string;
  state: boolean;
  time: Date;
  author: string;
};
