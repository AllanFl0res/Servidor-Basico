const { Router } = require("express") 

const Router = Router ();
this.app.get('/envios',(req, res) => res.send('GET Endpoint para envios'))
this.app.post('/envios',(req, res) => res.send('POST Endpoint para envios'))
this.app.put('/envios',(req, res) => res.send('PUT Endpoint para envios'))
this.app.delete('/envios',(req, res) => res.send('DELETE Endpoint para envios'))

module.exports = Router