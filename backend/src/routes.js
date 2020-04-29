const express = require('express');

const RevendedorController = require('./controllers/RevendedorController');
const PurchaseController = require('./controllers/PurchaseController');
const PerfilControlller = require('./controllers/PerfilController');
const SessionControlller = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionControlller.create);

routes.get('/perfil', PerfilControlller.index);

routes.get('/revendedor', RevendedorController.index);
routes.post('/revendedor', RevendedorController.create);

routes.get('/purchase', PurchaseController.index);
routes.post('/purchase', PurchaseController.create);
routes.delete('/purchase/:id', PurchaseController.delete);

module.exports = routes;