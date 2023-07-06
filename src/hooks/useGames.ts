import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGeneres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQeury: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQeury.genre?.id,
        platforms: gameQeury.platform?.id,
        ordering: gameQeury.sortOrder,
        search: gameQeury.searchText,
      },
    },
    [gameQeury]
  );

export default useGames;
