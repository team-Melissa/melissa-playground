import type { ChattingListDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useQuery } from '@tanstack/react-query';

const getChattingList = async () => {
  const { year, month, day } = getDay();

  const { data } = await APIClient.get<ChattingListDto>('/api/v1/chats', {
    params: { year, month, day },
  });

  return data.result;
};

export const CHATTING_LIST_QUERY_KEY = 'CHATTING_LIST_QUERY_KEY';

export const useGetChattingList = (enabled: boolean) => {
  return useQuery({
    queryFn: getChattingList,
    queryKey: [CHATTING_LIST_QUERY_KEY],
    enabled,
  });
};
