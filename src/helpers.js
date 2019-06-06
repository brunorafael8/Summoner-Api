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

const BASE_URL = (region: Region) =>
  `https://${region.toLowerCase()}.api.riotgames.com`

export const fetchSummonerByName = (region: Region, name: string) => {
  console.log('regin', region)
  console.log('name', name)
  return fetch(
    `${BASE_URL(region)}/lol/summoner/v3/summoners/by-name/${name}}`,
    {
      headers: {
        'X-Riot-Token': 'RGAPI-58f23328-6478-44f3-9d5e-5cc0bc1681a6'
      },
      method: 'GET'
    }
  )
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }

      return response.json()
    })
    .catch(error => console.log('error', error))
}
