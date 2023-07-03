import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"


// Server Setup

const server = new ApolloServer({
    // TypeDefs
    // Resolvers
});

const { url } = await startStandaloneServer(server,{
    listen: { port: 4000 }
});

console.log("Server running at port", 4000)