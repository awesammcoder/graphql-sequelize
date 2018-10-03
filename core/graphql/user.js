const GraphQL = require('graphql');
const {GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString} = GraphQL;

exports.module = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user){
          return user.id;
        }
      },

      firstName: {
        type: GraphQLString,
        resolve(user){
          return user.firstName;
        }
      },

      lastName: {
        type: GraphQLString,
        resolve(user){
          return user.lastName;
        }
      }
    }
  }
});
