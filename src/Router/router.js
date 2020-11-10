const { Router } = require('express');
const { send,vista} = require('../Controllers/controller_home')
const router = Router();

router.get('/',vista);
router.post('/send',send);

module.exports = router