export type AiProfile = {
  aiProfileId: number;
  profileName: string;
  imageUrl: string;
  hashTag1: string;
  hashTag2: string;
  feature1: string;
  feature2: string;
  feature3: string;
  createdAt: string;
  default: boolean;
};

export type AiProfilesDto = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: AiProfile[];
};
