const Express = require('express');
const GraphHTTP = require('express-graphql');
const Schema = require('./core/graphql/schema').module;

// Configuration
const PORT = 3000;
const app = Express();

// GraphQL API Endpoint
app.use('/api/v1', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
  logging: false
}));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening now on port ${PORT}`);
});
