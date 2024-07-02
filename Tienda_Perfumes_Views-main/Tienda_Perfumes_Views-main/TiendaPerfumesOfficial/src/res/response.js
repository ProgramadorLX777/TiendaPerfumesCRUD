// CONTROL DE EXCEPCIONES N° 200:
exports.success = function (req, res, msg = 'Solicitud exitosa!!', status = 200){
    res.status(status).send({
        error: false,
        status: status,
        body: msg
    });
}

// CONTROL DE EXCEPCIONES N° 500:
exports.error = function (res, res, msg = 'Error interno del Servidor!!', status = 500){
    res.status(status).send({
        error: true,
        status: status,
        body: msg
    });
}