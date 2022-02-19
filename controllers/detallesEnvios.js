const { request, response } = require ('express')


    const GetdetallesEnvios = (req = request, res = response) => 
       res.send('GET Endpoint para Detalles Envios')

       const postdetallesEnvios = (req = request, res = response) => 
       res.send('POST Endpoint para Detalles Envios')

       
       const putdetallesEnvios = (req = request, res = response) => 
       res.send('PUT Endpoint para Detalles Envios')

       
       const deletedetallesEnvios = (req = request, res = response) => 
       res.send('DELETE Endpoint para Detalles Envios')


    
    module.exports={
        GetdetallesEnvios,
        postdetallesEnvios,
        putdetallesEnvios,
        deletedetallesEnvios,
    }