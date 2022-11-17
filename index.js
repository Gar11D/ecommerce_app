const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

  app.get('/user_accounts', db.getUserAccounts);
  app.get('/user_accounts/:user_id', db.getUserAccountById);
  app.post('/user_accounts', db.createUserAccount);
  // app.put('/user_accounts/:user_id', db.updateUserAccount);
  app.delete('/user_accounts/:user_id', db.deleteUserAccount);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

