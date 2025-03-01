import { query_client } from "@solid/tan_stack_query/query_client";
import { QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import TopAnime from "./TopAnime/TopAnime";
import type { GetTopAnimeFetchRes } from "./TopAnime/get_top_anime_fetch/types";

export default function TopAnimeIsland(props: Props) {
  return (
    <QueryClientProvider client={query_client}>
      <TopAnime top_anime={props.top_anime} />
      <SolidQueryDevtools />
    </QueryClientProvider>
  );
}

type Props = { top_anime: GetTopAnimeFetchRes };
