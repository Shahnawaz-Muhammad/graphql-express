const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
  } = require('graphql');
  
  // Define ProjectType here
  
  const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // Define project-related queries here
    },
  });
  
  const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      // Define project-related mutations here
    },
  });
  
  module.exports = {
    query: RootQuery,
    mutation,
  };
  