const express = require('express');
const mongoose = require('mongoose');
// iniciando o app
const app = express();
app.use(express.json());
// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
require('./src/models/Product');
// const Product = mongoose.model('Product');
// o use aceita qualquer requisicao
// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);