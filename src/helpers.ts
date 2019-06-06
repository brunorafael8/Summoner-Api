import dotenv from 'dotenv'
import fetch from 'isomorphic-fetch'

dotenv.config()

export type Region =
  | 'BR1'
  | 'EUN1'
  | 'EUW1'
  | 'JP1'
  | 'KR'
  | 'LA1'
  | 'LA2'
  | 'NA1'
  | 'OC1'
  | 'RU'
  | 'TR1';

const BASE_URL = (region: Region): string =>
  `https://${region.toLowerCase()}.api.riotgames.com`

const HEADER_RIOT_TOKEN = 'X-Riot-Token'

export interface PromiseResponse {
  region: Region;
  name: string;
}

export const fetchSummonerByName = (region: Region, name: string): Promise<PromiseResponse> => {
  return fetch(
    `${BASE_URL(region)}/lol/summoner/v4/summoners/by-name/${name}`,
    {
      headers: {
        [HEADER_RIOT_TOKEN]: process.env.API_KEY
      },
      method: 'GET'
    }
  )
    .then(response => {
      console.log(process.env.API_KEY)
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }

      return response.json().then((result) => {
        console.log(result)
        return result
      }).catch((err) => {
        console.log('error', err)
      })
    })
    .catch(error => console.log('error', error))
}
