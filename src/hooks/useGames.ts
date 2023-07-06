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
      },
    },
    [gameQeury]
  );

export default useGames;
