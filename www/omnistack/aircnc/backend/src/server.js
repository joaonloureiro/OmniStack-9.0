const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-trgoz.mongodb.net/omnistack09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// app GET, POST, PUT, DELETE

// Get      = Buscar informação do backend.
// Post     = Criar informação no backend (cadastro de usuário). 
// Put      = Editar informações no backend.
// Delete   = Deletar informações no backend.

// req.query    = Acessar query params (para filtros).
// req.params   = Acessar route params (para edição, delete)
// req.body     = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);