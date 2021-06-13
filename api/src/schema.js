const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input PetFilter {
    type: String
  }

  type Query {
    pets(filters: PetFilter, limit: Int): [Pet]
    pet(id: String): Pet
  }

  input CreatePetInput {
    name: String!
    type: String!
  }

  type Mutation {
    createPet(input: CreatePetInput): Pet
  }
`;

module.exports = typeDefs;
