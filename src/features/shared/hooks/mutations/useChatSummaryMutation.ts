import type { ChatSummaryDto } from '@/features/shared/types/dto';
import { getDay } from '@/features/shared/utils/day';
import { APIClient } from '@/modules/axios';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

const postChatSummary = async () => {
  const { year, month, day } = getDay();
  const { data } = await APIClient.post<ChatSummaryDto>('/api/v2/summary', undefined, {
    params: { year, month, day },
  });

  return data.result;
};

export const useChatSummaryMutation = () => {
  return useMutation({
    mutationFn: postChatSummary,
    onSuccess: () => toast('요약 성공'),
    onError: (error) => {
      if (isAxiosError(error)) {
        console.error(error);
        toast(`useChatSummaryMutation 실패: ${error.response?.data.code}`);
      }
    },
  });
};
