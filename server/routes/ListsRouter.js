const router = require('express').Router();
const ListsCtrl = require('../controllers/ListsController');

router.get('/', ListsCtrl.getListsWithTasks);

router.post('/', ListsCtrl.addAList);

module.exports = router;
