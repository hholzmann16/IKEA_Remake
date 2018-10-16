const mongoose = require("mongoose");
// const options = {
// autoIndex: false, // Don't build indexes
// reconnectTries: 30, // Retry up to 30 times
// reconnectInterval: 500, // Reconnect every 500ms
// poolSize: 10, // Maintain up to 10 socket connections
// // If not connected, return errors immediately rather than waiting for reconnect
// bufferMaxEntries: 0,
// useNewUrlParser: true
// };

// const connectWithRetry = () => {
//   console.log("MongoDB connection with retry");
//   mongoose
//     .connect(
//       "mongodb://127.0.0.1:27017/IkeaDB",
//       options
//     )
//     .then(() => {
//       console.log("MongoDB is connected");
//     })
//     .catch(err => {
//       console.log(
//         "MongoDB connection unsuccessful, retry after 5 seconds.",
//         err
//       );
//       setTimeout(connectWithRetry, 5000);
//     });
// };

// connectWithRetry();

let db = mongoose.connection;

mongoose.connect("mongodb://localhost/IkeaDB");

db.on("error", console.error.bind(console, "error connecting"));
db.once("open", () => {
  console.log("connected to IkeaDB!");
});

let data = new mongoose.Schema({
  title_id: Number,
  type: String,
  productLine: String,
  title: String,
  articleNumber: String,
  price: String,
  starRating: Number,
  reviewCount: Number,
  description: String,
  availability: Boolean,
  imageUrl: String,
  additionalUrl: [{ Url: String }]
});

let displayData = mongoose.model("displayData", data);

module.exports.displayData = displayData;
