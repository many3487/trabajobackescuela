const escuela = require('./escuela');

function escuelaApi(app) {
    app.use('/escuela', escuela)
}

module.exports = escuelaApi;