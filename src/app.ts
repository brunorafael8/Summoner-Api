import express from 'express'
import graphqlHTTP from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import { schema } from './schema'

const app = express()

export interface GraphqlSettingsReturn {
  graphiql: boolean;
  schema: GraphQLSchema;
}

const graphqlSettings = (): GraphqlSettingsReturn => ({
  graphiql: true,
  schema: schema
})

const graphqlServer = graphqlHTTP(graphqlSettings)

app.use('/graphql', graphqlServer)

app.listen(3000, function (): void {
  console.log('app listening on port 3000!')
})
