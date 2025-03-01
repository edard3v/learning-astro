import type { GetTopAnimeFetchRes } from "@views/Home/TopAnimeIsland/TopAnime/get_top_anime_fetch/types";
import { atom } from "nanostores";

export const init_top_anime = atom<GetTopAnimeFetchRes | undefined>();
