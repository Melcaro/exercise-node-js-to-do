const router = require('express').Router();
const TasksCtrl = require('../controllers/TasksController');

router.post('/', TasksCtrl.addATask);

router.delete('/:taskID', TasksCtrl.deleteATask);

module.exports = router;
