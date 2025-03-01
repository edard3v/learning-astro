import { get_anime_id } from "./get_anime_id";

export default function AnimeById() {
  const anime_id = get_anime_id();
  return <div>Anime {anime_id}</div>;
}
