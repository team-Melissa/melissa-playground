import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const initQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
};

export const useReactQueryInit = () => {
  const [queryClient] = useState(initQueryClient);

  return queryClient;
};
