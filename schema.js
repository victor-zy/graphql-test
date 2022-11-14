import { makeExecutableSchema } from '@graphql-tools/schema'
import {mergeTypeDefs, mergeResolvers, } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const typeDefs = mergeTypeDefs(loadFilesSync('./typeDefs'), {all: true});

const resolvers = mergeResolvers(loadFilesSync('../resolvers'));

export default makeExecutableSchema({
    typeDefs,
    resolvers,
});