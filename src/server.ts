import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';
import { UserResolvers } from './graphql/users/UserResolver';


const schema = buildSchemaSync({
  resolvers:[UserResolvers]
});

const server = new ApolloServer({
  schema
});

server.listen(4000, () => {
  console.log("server running 4000!")
} )