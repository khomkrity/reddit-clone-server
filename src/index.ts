import { MikroORM } from '@mikro-orm/core';
import mikroConfig from './mikro-orm.config';
import { CONFIG } from './constants';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
  // ts orm setup with postgresql
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  // restapi server
  const app = express();

  // graphql schema
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  // graphql endpoint
  apolloServer.applyMiddleware({ app });

  app.listen(CONFIG.PORT, () => {
    console.log(`server started on localhost:${CONFIG.PORT}`);
  });
};

main().catch(err => {
  console.error(err);
});
