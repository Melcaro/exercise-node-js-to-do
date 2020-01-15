const router = require('express').Router();
const TasksCtrl = require('../controllers/TasksController');

router.post('/', TasksCtrl.addATask);

module.exports = router;
