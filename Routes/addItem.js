const express = require('express');
const { addItems, getAllItems, getSingleItem, deleteItem, updateItem } = require('../controller/addItemController');
const router = express.Router();

router.route('/addBook').post(addItems);
router.route("/getAllBook").get(getAllItems)
router.route("/book/:id").get(getSingleItem).delete(deleteItem)
router.route("/book/:id").put(updateItem)


module.exports = router;