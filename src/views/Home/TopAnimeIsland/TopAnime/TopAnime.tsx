import { createQuery } from "@tanstack/solid-query";
import css from "./TopAnime.module.css";
import { cls } from "@utils/cls";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import Slider from "@solid/components/sliders/Slider/Slider";
import { ROUTER } from "@router/router";
import type { GetTopAnimeFetchRes } from "./get_top_anime_fetch/types";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";

export default function TopAnime(props: Props) {
  const query = createQuery(() => ({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
    initialData: props.top_anime,
  }));

  const data = () =>
    query.data?.data.map((item) => ({
      id: String(item.mal_id),
      title: item.title,
      img: item.images.webp.large_image_url,
      href: `${ROUTER.anime.href}?id=${item.mal_id}`,
    }));

  return (
    <div class={cls([css.top_anime])}>
      {query.isError && <ErrorComp />}
      {/* {query.isLoading && <Loading />}
      {query.isSuccess && <Slider data={data()!} />} */}
      <Slider data={data()} />
    </div>
  );
}

type Props = { top_anime: GetTopAnimeFetchRes };
