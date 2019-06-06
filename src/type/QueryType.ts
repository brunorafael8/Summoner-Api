import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { SummonerLoader } from '../loader'
import SummonerType from './SummonerType'

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        region: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (obj, args) => SummonerLoader.load(args)
    }
  })
})
