const db = require('../database/index.js');
const ikeaData = require('../Data/ikeaMockData.json');

var insertData = function(){
  console.log(ikeaData)
  db.displayData.insertMany(
    ikeaData
  )

};

insertData();