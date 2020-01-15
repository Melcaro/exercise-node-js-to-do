const router = require('express').Router();
const ListsCtrl = require('../controllers/ListsController');

router.get('/', ListsCtrl.getLists);

module.exports = router;
