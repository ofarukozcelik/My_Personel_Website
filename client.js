import { GraphQLClient } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.HYGRAPH_API, {
  headers: {},
});
