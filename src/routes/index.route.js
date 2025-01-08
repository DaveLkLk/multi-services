const { Router } = require('express');
const router = Router();
const ConsultaRoute = require('./consulta/index.js')

router.use('/api/consulta', ConsultaRoute)

module.exports = router;