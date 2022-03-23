import { Recipe, User, Secret, Resolvers } from "./generated/resolvers";

const users = [
    {
        id: 1,
        name: "hiragi-gkuth",
        email: "hiragi-gkuth@hiragi.guru",
        role: "admin",
    },
    {
        id: 2,
        name: "kaede-jifnh",
        email: "kaede-jifnh@hiragi.guru",
        role: "user",
    },
];

const secrets = [
    {
        id: 1,
        superDuperHyperCredential: "this is a pen",
    }
];

const recipes: Recipe[] = [

]

export const resolvers: Resolvers = {
    Query: {
        user: async (_parent, args, _context, _info) => users[args.id],
        secret: async (_parent, args, _context, _info) => secrets[args.id],
        recipe: async (_parent, args, _context, _info) => {
            return {
                id: args.id,
                title: "recipe title",
                imageUrl: null,
            }
        } 
    }
}

const IsAuthenticated = preExecRule