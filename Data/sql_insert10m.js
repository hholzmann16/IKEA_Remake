var faker = require("faker");
const fs = require("fs");

let total = 0;
const limit = 101;
const Files1 = fs.createWriteStream("./sql_data2.csv");

for (var i = 1; i < limit; i++) {
  if (i % 1000000 === 0) {
    console.log(`[${new Date()}]`);
    console.log(i + total, "num");
  }
  var docs =
    i +
    "," +
    faker.name.lastName() +
    "," +
    faker.lorem.word() +
    "," +
    faker.internet.domainWord() +
    "," +
    Math.floor(Math.random() * 1000000) +
    "," +
    Math.floor(Math.random() * 1000) +
    "." +
    Math.floor(Math.random() * 100) +
    "," +
    Math.floor(Math.random() * 6) +
    "," +
    Math.floor(Math.random() * 10000) +
    "," +
    "Lorem ipsum sentence fake" +
    "," +
    Math.floor(Math.random() * 2) +
    "," +
    "http://dummyimage.com/211x112.jpg/dddddd/000000" +
    "," +
    "http://dummyimage.com/168x138.jpg/5fa2dd/ffffff" +
    "," +
    "http://dummyimage.com/124x140.jpg/ff4444/ffffff" +
    "," +
    "http://dummyimage.com/105x173.jpg/cc0000/ffffff" +
    "\n";

  Files1.write(docs);
}
console.log(`[${new Date()}]`);
//node --max-old-space-size=8192 sql_insert10m.js

// CREATE TABLE displaydatas (
//   item_id INT NOT NULL,
//   item_type VARCHAR(40) NOT NULL,
//   product_line VARCHAR(40) NOT NULL,
//   title VARCHAR(40) NOT NULL,
//   article_number VARCHAR(40) NOT NULL,
//   price VARCHAR(40) NOT NULL,
//   star_rating INT,
//   review_count INT,
//   description VARCHAR(40) NOT NULL,
//   availability BOOLEAN,
//   image VARCHAR(80) NOT NULL,
//   image2 VARCHAR(80) NOT NULL,
//   image3 VARCHAR(80) NOT NULL,
//   image4 VARCHAR(80) NOT NULL,
//   PRIMARY KEY (item_id)
// );

// mysql -u root  --local-infile=1 IkeaDB
//LOAD DATA LOCAL INFILE '/Users/hannahholzmann/Desktop/IkeaDisplayRepo/Ikea_FEC/data/sql_data.csv' INTO TABLE displaydatas FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';
