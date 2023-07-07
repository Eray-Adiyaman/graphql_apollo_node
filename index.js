import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

//typeDefs
import { typeDefs } from "./schema";


// Server Setup

const server = new ApolloServer({
    typeDefs,
    // Resolvers
});

const { url } = await startStandaloneServer(server,{
    listen: { port: 4000 }
});

console.log("Server running at port", 4000)