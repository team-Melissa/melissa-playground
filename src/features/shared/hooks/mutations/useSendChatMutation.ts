import { CHATTING_LIST_QUERY_KEY } from '@/features/shared/hooks/queries/useGetChattingList';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const sendChat = () => {
  // Todo: v2 non-streaming API 나오면 연동
  return Promise.resolve('성공');
};

export const useSendChatMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendChat,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [CHATTING_LIST_QUERY_KEY] }),
    onError: () => toast('useSendChatMutation 실패'),
  });
};
