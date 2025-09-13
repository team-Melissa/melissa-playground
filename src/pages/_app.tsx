import { Toaster } from '@/components/ui/sonner';
import { ReactQueryProvider } from '@/modules/react-query';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
      <Toaster />
    </ReactQueryProvider>
  );
}
