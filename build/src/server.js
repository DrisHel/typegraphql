"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./graphql/UserResolver");
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [UserResolver_1.UserResolvers]
});
const server = new apollo_server_1.ApolloServer({
    schema
});
server.listen(4000, () => {
    console.log("server running 4000!");
});
