import { createQuery } from "@tanstack/solid-query";
import css from "./TopAnime.module.css";
import { cls } from "@utils/cls";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import Slider from "@solid/components/sliders/Slider/Slider";
import Loading from "@solid/components/loaders/Loading/Loading";
import ErrorComp from "@solid/components/errors/ErrorComp/ErrorComp";

export default function TopAnime() {
  const query = createQuery(() => ({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  }));

  const data = () =>
    query.data?.data.map((item) => ({
      id: String(item.mal_id),
      title: item.title,
      img: item.images.webp.large_image_url,
    }));

  return (
    <div class={cls([css.top_anime])}>
      {query.isError && <ErrorComp />}
      {query.isLoading && <Loading />}
      {query.isSuccess && <Slider data={data()!} />}
    </div>
  );
}
