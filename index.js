import express from "express";
import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers.js";
import schema from "./schema.js";

const app = express()

app.get("/", (req, res) => {
    res.send("Running...")
})

const root = resolvers
// { inf: () => { console.log("inferenz.ai") } }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8082, () => {
    console.log("Running on 8082")
})
