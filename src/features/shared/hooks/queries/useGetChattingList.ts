import type { ChattingListDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useQuery } from '@tanstack/react-query';

const getChattingList = async (aiProfileId: number, year: number, month: number, day: number) => {
  const { data } = await APIClient.get<ChattingListDto>('/api/v1/chats', {
    params: { aiProfileId, year, month, day },
  });

  return data.result;
};

export const CHATTING_LIST_QUERY_KEY = 'CHATTING_LIST_QUERY_KEY';

export const useGetChattingList = (aiProfileId: number) => {
  const { year, month, day } = getDay();

  return useQuery({
    queryFn: () => getChattingList(aiProfileId, year, month, day),
    queryKey: [CHATTING_LIST_QUERY_KEY, aiProfileId, year, month, day],
  });
};
