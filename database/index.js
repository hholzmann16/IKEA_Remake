const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env["DB_NAME"],
  process.env["DB_USER"],
  process.env["DB_PASS"],
  {
    host: process.env["DB_HOST"],
    port: process.env["DB_PORT"],
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const Displaydatas = sequelize.define("displaydatas", {
  item_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  item_type: Sequelize.STRING,
  product_line: Sequelize.STRING,
  title: Sequelize.STRING,
  article_number: Sequelize.STRING,
  price: Sequelize.STRING,
  star_rating: Sequelize.INTEGER,
  review_count: Sequelize.INTEGER,
  description: Sequelize.STRING,
  availability: Sequelize.BOOLEAN,
  image: Sequelize.STRING,
  image2: Sequelize.STRING,
  image3: Sequelize.STRING,
  image4: Sequelize.STRING
});

module.exports.sequelize = sequelize;
module.exports.Displaydatas = Displaydatas;
