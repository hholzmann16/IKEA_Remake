var faker = require("faker");
const mongoose = require("mongoose");
const fs = require("fs");

let total = 0;
const limit = 10000000;
const Files1 = fs.createWriteStream("./mongo_data.json");

console.log(`[${new Date()}]`);
// const doit = () => {
for (var i = 0; i < limit; i++) {
  if (i % 1000000 === 0) {
    console.log(i + total, "num");
  }
  docs = {
    title_id: i,
    type: faker.name.lastName(),
    productLine: faker.lorem.word(),
    title: faker.internet.domainWord(),
    articleNumber: `${Math.floor(Math.random() * 1000000)}`,
    price: `${Math.floor(Math.random() * 1000)}.${Math.floor(
      Math.random() * 100
    )}`,
    starRating: Math.floor(Math.random() * 6),
    reviewCount: Math.floor(Math.random() * 10000),
    description: "Lorem ipsum sentence fake",
    availability: Math.random() >= 0.5,
    imageUrl: "http://dummyimage.com/211x112.jpg/dddddd/000000",
    additionalUrl: [
      { Url: "http://dummyimage.com/168x138.jpg/5fa2dd/ffffff" },
      { Url: "http://dummyimage.com/124x140.jpg/ff4444/ffffff" },
      { Url: "http://dummyimage.com/105x173.jpg/cc0000/ffffff" }
    ]
  };
  var stringDocs = JSON.stringify(docs);
  Files1.write(stringDocs);
}
console.log(`[${new Date()}]`);
// node --max-old-space-size=8192 mongo_insert10m.js
// mongoimport --db IkeaDB --collection displaydatas --file mongo_data.json
// above done in file itself, not in mongo
