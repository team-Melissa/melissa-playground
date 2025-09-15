import type { UserMemoryDto } from '@/features/shared/types/dto';
import { APIClient } from '@/modules/axios';
import { useQuery } from '@tanstack/react-query';

const getUserMemory = async () => {
  const { data } = await APIClient.get<UserMemoryDto>('/api/v1/memory');

  return data.result;
};

export const USER_MEMORY_QUERY_KEY = 'USER_MEMORY_QUERY_KEY';

export const useGetUserMemory = () => {
  return useQuery({
    queryFn: getUserMemory,
    queryKey: [USER_MEMORY_QUERY_KEY],
  });
};
