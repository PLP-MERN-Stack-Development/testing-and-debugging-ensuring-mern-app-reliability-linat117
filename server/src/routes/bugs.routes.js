const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/bugs.controller');

router.post('/', ctrl.createBug);
router.get('/', ctrl.getBugs);
router.put('/:id', ctrl.updateBug);
router.delete('/:id', ctrl.deleteBug);

module.exports = router;
