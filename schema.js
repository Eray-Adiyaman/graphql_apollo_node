export const typeDefs = `#graphql 
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
    game: Game!
    author: Author!
    reviews: [Review!]
}
type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
}
type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, updates: UpdateGameInput!): Game
}
input AddGameInput {
    title: String!,
    platform: [String!]!
}
input UpdateGameInput {
    title: String,
    platform: [String!]
}
`