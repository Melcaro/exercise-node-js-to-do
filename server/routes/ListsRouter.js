const router = require('express').Router();
const ListsCtrl = require('../controllers/ListsController');

router.get('/', ListsCtrl.getListsWithTasks);

module.exports = router;
