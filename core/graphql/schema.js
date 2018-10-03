const GraphQL = require('graphql');
const {GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString, GraphQLNonNull} = GraphQL;

const db = require('../db').module;

// Schema Objects
const User = require('./user').module;

// GraphQL Query
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query.',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(User),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args){
          return db.user.findAll({where: args})
        }
      }
    }
  }
});

// GraphQL Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Functions to create stuff',
  fields: () => {
    return {
      addUser: {
        type: User,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(_, args){
          return db.user.create({
            firstName: args.firstName,
            lastName: args.lastName
          });
        }
      }
    }
  }
});


// GraphQL Schema
const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

exports.module = Schema;