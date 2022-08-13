import { ApolloClient, InMemoryCache } from "@apollo/client"; 

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/katrine13/web3subgraph",
    cache: new InMemoryCache(), 
}); 

export default client; 