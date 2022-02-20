const {request, response } = require ('express')
const { ListadoEnvios } = require('../models/envios');
const { guardarDB, LeerDB } = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}