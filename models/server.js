const express = require('express');

class Server{
    constructor(){
        this.app = express ()
        this.app.use (cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        

        this.routes();

        }
        routes(){
            //this.app.get('/', (req, res)=> res.send('Hello World'))
            //this.app.get('/precios', (req, res) => res.send ('Endpoint para Precios'))
            //this.app.get('/paquetes', (req, res) => res.send ('Endpoint para Precios'))
            //this.app.get('/envio', (req, res) => res.send ('Endpoint para Precios'))
            //this.app.get('/DetalleEnvios', (req, res) => res.send ('Endpoint para Precios'))
            //this.app.get('/seguimiento', (req, res) => res.send ('Endpoint para Precios'))

            this.app.use('/precios',require('../routes/precios'))
            this.app.use('/envios',require('../routes/envios'))
            this.app.use('/seguimiento',require('../routes/seguimiento'))
            this.app.use('/paquetes',require('../routes/paquetes'))
            this.app.use('/detallesEnvios',require('../routes/detallesEnvios'))

            //this.app.get('/precios',(req, res) => res.send('GET Endpoint para Precios'))
            //this.app.post('/precios',(req, res) => res.send('POST Endpoint para Precios'))
            //this.app.put('/precios',(req, res) => res.send('PUT Endpoint para Precios'))
            //this.app.delete('/precios',(req, res) => res.send('DELETE Endpoint para Precios'))




        }
        listen(){
            this.app.listen(process.env.PORT, () => console.log ("El puerto esta corriendo el puerto TCP" + process.env.PORT))
        }
    }

module.exports = Server