const db = require("../database/index.js");

exports.getData = function(req, res) {
  // cache.route();
  console.log(req.params.id, "this is req");
  db.Displaydatas.find({
    where: {
      item_id: req.params.id
    }
  })
    .then(item => {
      console.log("Getting the data...");
      res.json(item);
    })
    .catch(err => {
      console.log(err, "You have an error in the get request");
    });
};

exports.addData = function(req, res) {};

exports.deleteData = function(req, res) {};

exports.editData = function(req, res) {};
