import DataLoader from 'dataloader'
import { Region, fetchSummonerByName } from './helpers'

// TODO: Put types on returns
const load = (region: Region, name: string): Promise<any> => fetchSummonerByName(region, name)

export default (region: Region): any => new DataLoader((name: string): any => load(region, name))
