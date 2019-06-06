import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'Summoner data',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Summoner ID'
    },
    accountId: {
      type: GraphQLString,
      description: 'Summoner Account ID'
    },
    name: {
      type: GraphQLString,
      description: 'Summoner Name'
    },
    summonerLevel: {
      type: GraphQLInt,
      description: 'Summoner Level'
    },
    profileIconId: {
      type: GraphQLInt,
      description: 'Summoner Icon'
    }
  })
})
