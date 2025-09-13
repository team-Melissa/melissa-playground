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

export type Chat = {
  chatId: number;
  role: string;
  content: string;
  createAt: string;
  aiProfileName: string;
  aiProfileImageS3: string;
};

export type ChattingListDto = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    aiProfileName: string;
    aiProfileImageS3: string;
    chats: Chat[];
  };
};

export type ChangeAiProfileDto = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: string;
};

export type MakeChatRoomDto = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    threadId: number;
    year: number;
    month: number;
    day: number;
  };
};
