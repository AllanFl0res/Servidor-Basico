const { Router } = require("express") 

const Router = Router ();
this.app.get('/seguimiento',(req, res) => res.send('GET Endpoint para seguimiento'))
this.app.post('/seguimiento',(req, res) => res.send('POST Endpoint para seguimiento'))
this.app.put('/seguimiento',(req, res) => res.send('PUT Endpoint para seguimiento'))
this.app.delete('/seguimiento',(req, res) => res.send('DELETE Endpoint para seguimiento'))

module.exports = Router