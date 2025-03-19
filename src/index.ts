import express from 'express';
import 'express-async-errors';

import cors from './app/middlewares/cors';
import errorHandler from './app/middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () =>
  // eslint-disable-next-line no-console
  console.log(`🔥 Server started at http://localhost:3001`)
);
