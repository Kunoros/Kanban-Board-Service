import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import * as path from 'path';
import './db';

// import manageBoardsRouter from './routes/manage-boards';
// import boardRouter from './routes/board';
import v1Router from './routes/apiv1';

const app = express();

if (app.get('env') === 'development') {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', v1Router)

export default app;
