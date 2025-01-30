const { Router } = require('express');
const router = Router();
const ConsultaRoute = require('./consulta/index.js')
const MonitorRoute = require('./monitor/index.js')

router.use('/api/consulta', ConsultaRoute)
router.use('/monitor', MonitorRoute)

module.exports = router;