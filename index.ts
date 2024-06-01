import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Author {
    id : ID!
    name: String!
    author: String
    books : [Book]
  }

  type Book {
    id : ID!
    title: String!
    author: Author!
    publishedYear : Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    authors : [Author]
  }

  type Mutation {
    addBook(title : String!, publishedYear: Int, authorId : String!):Book!
  }
`;

const data = {
  authors: [
    { id: "1", name: "Kate Chopin", bookIds: ["101", "102"] },
    { id: "2", name: "Paul Auster", bookIds: ["103"] }
  ],
  books: [
    { id: "101", title: "The Awakening", publishedYear: 2000, authorId: "1" },
    { id: "102", title: "City of Glass", publishedYear: 2010, authorId: "1" },
    { id: "103", title: "Wonderland Paris", publishedYear: 2020, authorId: "2" }
  ]
}


const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId)
    }
  },
  Author: {
    books: (parent) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id))
    }
  },
  Query: {
    books: () => data.books,
    authors: () => data.authors
  },

  Mutation: {
    addBook: (parent, args) => {
      const newBook = { ...args, id: data.books.length + 1 }
      data.books.push(newBook);
      return newBook;
    }
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const initServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

initServer()