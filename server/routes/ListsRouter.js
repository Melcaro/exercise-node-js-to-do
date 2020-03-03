const router = require('express').Router();
const ListsCtrl = require('../controllers/ListsController');

router.get('/', ListsCtrl.getListsWithTasks);

router.post('/', ListsCtrl.addAList);

router.delete('/:listID', ListsCtrl.deleteAList);

module.exports = router;
