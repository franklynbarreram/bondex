import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ToastProvider } from "react-toast-notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClientRef = React.useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ToastProvider autoDismiss placement="top-center">
        <Component {...pageProps} />
      </ToastProvider>
    </QueryClientProvider>
  );
}
