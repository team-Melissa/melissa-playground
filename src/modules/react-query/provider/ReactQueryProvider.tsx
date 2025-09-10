import { useReactQueryInit } from '@/modules/react-query/hooks/useReactQueryInit';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type PropsWithChildren } from 'react';

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useReactQueryInit();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
