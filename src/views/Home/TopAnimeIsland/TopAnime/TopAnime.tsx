import { createQuery } from "@tanstack/solid-query";
import css from "./TopAnime.module.css";
import { cls } from "@utils/cls";
import { get_top_anime_fetch } from "./get_top_anime_fetch/get_top_anime_fetch";
import { For, Match, Switch } from "solid-js";

export default function TopAnime() {
  const query = createQuery(() => ({
    queryKey: ["top_anime"],
    queryFn: get_top_anime_fetch,
  }));

  return (
    <div class={cls([css.top_anime])}>
      <Switch>
        <Match when={query.isPending}>
          <p>Loading...</p>
        </Match>

        <Match when={query.isError}>
          <p>Error</p>
        </Match>

        <Match when={query.isSuccess}>
          <For each={query.data?.data}>{(item) => <p>{item.title}</p>}</For>
        </Match>
      </Switch>
    </div>
  );
}
