const { Router} = require('express');
const router = Router();
const Persona = require('./persona.js');

router.post('/persona', Persona);
module.exports = router;