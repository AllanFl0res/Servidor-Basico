const { Router } = require("express") 
const { 
    GetdetallesEnvios,
    postdetallesEnvios,
    putdetallesEnvios,
    deletedetallesEnvios
} = require('../controllers/detallesEnvios');
const Router = Router ();

Router.get('/', GetdetallesEnvios)
Router.post('/', postdetallesEnvios)
Router.put('/', putdetallesEnvios)
Router.delete('/', deletedetallesEnvios)

//Router.get('/', GetdetallesEnvios)
//Router.get('/',(req, res) => res.send('GET Endpoint para detalles Envios'))
//Router.post('/',(req, res) => res.send('POST Endpoint para detalles Envios'))
//Router.put('/',(req, res) => res.send('PUT Endpoint para detalles Envios'))
//Router.delete('/',(req, res) => res.send('DELETE Endpoint para detalles Envios'))

module.exports = Router