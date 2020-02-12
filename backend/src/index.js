const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kirito:RubickTheGrandMagus@cluster0-4jrtx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP

// GET: Receber alguma informação (Buscar, listar)
// POST: Criar alguma informação (Salvar, cadastrar)
// PUT: Editar alguma informação (Editar)
// DELETE Deletar alguma informação (Delete)

// Tipos de parâmetros

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não relacional)



