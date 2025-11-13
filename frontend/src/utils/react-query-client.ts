import { QueryClient } from '@tanstack/react-query';

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
});
