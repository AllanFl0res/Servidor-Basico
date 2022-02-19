const { Router } = require("express") 

const Router = Router ();
this.app.get('/precios',(req, res) => res.send('GET Endpoint para Precios'))
this.app.post('/precios',(req, res) => res.send('POST Endpoint para Precios'))
this.app.put('/precios',(req, res) => res.send('PUT Endpoint para Precios'))
this.app.delete('/precios',(req, res) => res.send('DELETE Endpoint para Precios'))

module.exports = Router