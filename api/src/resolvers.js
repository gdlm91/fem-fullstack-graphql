/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { filters }, { models }) {
      return models.Pet.findMany(filters);
    },
    pet(_, { id }, { models }) {
      return models.Pet.findOne({ id });
    },
  },
  Mutation: {
    createPet(_, { input }, { models }) {
      return models.Pet.create(input);
    },
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === "DOG"
  //       ? "https://placedog.net/300/300"
  //       : "http://placekitten.com/300/300";
  //   },
  // },
  // User: {},
};
