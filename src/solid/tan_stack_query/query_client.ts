// query-client.ts
import { QueryClient } from "@tanstack/solid-query";
import { persistQueryClient } from "@tanstack/solid-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

export const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24, // 24h
      retry: 1,
      experimental_prefetchInRender: true,
    },
  },
});

if (typeof window !== "undefined") {
  const storagePersister = createSyncStoragePersister({
    storage: sessionStorage,
  });

  persistQueryClient({
    queryClient: query_client,
    persister: storagePersister,
    maxAge: 1000 * 60 * 60 * 24, // 24h
  });
}

// recuerda ejecutar esto en tu layout si usas localStorage
// <script>
//   import "@solid/tan_stack_query/clear_query_client_if_refresh.ts";
// </script>
