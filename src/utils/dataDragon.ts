type Version = string;

// Just typing what we need.
export interface Champion {
  id: string;
  name: string;
}

// Just typing what we need.
interface ChampionResponse {
  data: Record<string, Champion>;
}

export const DATA_DRAGON_VERSIONS_URL =
  'https://ddragon.leagueoflegends.com/api/versions.json';

export const getDataDragonChampionsUrl = (version: string) =>
  `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

export const getChampionLoadingImageUrl = (championId: string) => {
  return new URL(
    `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_0.jpg`,
  ).href;
};

export const getLatestVersion = async (): Promise<string> => {
  const response = await fetch(DATA_DRAGON_VERSIONS_URL);
  const versions: Version[] = await response.json();

  return versions[0];
};

export const getChampions = async (): Promise<Champion[]> => {
  const latestVersion = await getLatestVersion();
  const response = await fetch(getDataDragonChampionsUrl(latestVersion));
  const { data }: ChampionResponse = await response.json();

  return Object.values(data);
};
