import { Region, fetchSummonerByName } from '../helpers'

export interface LoadArgs {
  region: Region;
  name: string;
}

export interface LoadResponse {
  region: Region;
  name: string;
}

export const load = async ({
  region,
  name
}: LoadArgs): Promise<LoadResponse> => {
  const summoner = await fetchSummonerByName(region, name)
  return summoner
}
