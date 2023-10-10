const express = require('express');

const { contactController } = require('../app/Controllers');
const { RequestParser } = require('../app/Middlewares');

const router = express.Router();

router.get('/', RequestParser, contactController.getAll);
router.post('/', contactController.add);
router.get('/:id', contactController.details);
router.patch('/:id', contactController.update);
router.delete('/:id', contactController.destroy);


module.exports = router;