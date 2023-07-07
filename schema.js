export const typeDefs = `#graphql 
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}

type Review {
    id: ID!
    rating: int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: boolean!
}
type Query {
    reviews: [Review]
    games: [Game]
    Author: [Author]
}
`