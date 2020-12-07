/* eslint-disable no-console */
import express from 'express';
import 'express-async-errors';

import './database';
import uploadConfig from './config/upload';

import routes from './routes';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
    console.log('Server online ✔');
});
