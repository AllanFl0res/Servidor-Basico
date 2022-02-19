const { Router } = require("express") 

const Router = Router ();
this.app.get('/paquetes',(req, res) => res.send('GET Endpoint para paquetes'))
this.app.post('/paquetes',(req, res) => res.send('POST Endpoint para paquetes'))
this.app.put('/paquetes',(req, res) => res.send('PUT Endpoint para paquetes'))
this.app.delete('/paquetes',(req, res) => res.send('DELETE Endpoint para paquetes'))

module.exports = Router