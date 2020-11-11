import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
console.log(process.env.PORT);

import { db } from './models/index.js';
import { gradeRouter } from './routes/gradeRouter.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors({ origin: 'http://wsp-grades-app.herokuapp.com/' }));
// app.use(
//   cors({
//     origin: 'https://wsp-grades-app.herokuapp.com/',
//   })
// );
//https://wsp-grades-app.herokuapp.com/
//https://wsp-grades-app.herokuapp.com/
//https://wsp-grades-app.herokuapp.com/
//https://wsp-grades-app.herokuapp.com/

// app.get('/', (req, res) => {
//   res.send('API em execucao');
// });

https: app.use('/', gradeRouter);

app.listen(process.env.PORT || 8081, () => {
  try {
    console.log('API em execução');
  } catch (error) {
    console.log('Erro ao iniciar a API');
  }
});
