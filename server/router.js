var router = require("express").Router();
var controller = require("./controller.js");
var cache = require("express-redis-cache")();

router
  .route("/item/:id")
  .get(cache.route(), controller.getData)
  // .get(controller.getData)
  .post(controller.addData)
  .delete(controller.deleteData)
  .put(controller.editData);

module.exports = router;
