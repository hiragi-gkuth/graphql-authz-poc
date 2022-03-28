import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchema } from "@graphql-tools/load";
import Koa, { Middleware } from "koa";
import { graphqlHTTP } from "koa-graphql";
import Router from "koa-router";
import { resolvers } from "./lib/resolvers";

import { join } from "path";

async function main() {
    const app = new Koa();
    const router = new Router();

    router.all("/graphql", await graphql());
    app.use(router.routes());

    app.listen(9789, () => {
        console.log("listen start");
    })
}


async function graphql(): Promise<Middleware> {
    const schema = await loadSchema(join(__dirname, "../../schema.gql"), {
        resolvers: resolvers,
        loaders: [ new GraphQLFileLoader() ],
    });

    return graphqlHTTP({ schema, graphiql: true });
}

main();
