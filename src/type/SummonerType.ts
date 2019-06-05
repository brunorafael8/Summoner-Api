import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'Summoner data',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'Summoner ID'
    },
    accountId: {
      type: GraphQLInt,
      description: 'Summoner Account ID'
    },
    name: {
      type: GraphQLString,
      description: 'Summoner Name'
    }
  })
})
