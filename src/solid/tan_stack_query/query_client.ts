import { QueryClient } from "@tanstack/solid-query";

export const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24, // 24h,
      retry: 1,
    },
  },
});

// const localStoragePersister = createSyncStoragePersister({
//   storage: window.localStorage,
// });

// persistQueryClient({
//   queryClient: query_client,
//   persister: localStoragePersister,
//   maxAge: 24 * 60 * 60 * 1000, // 24 horas en milisegundos
// });
