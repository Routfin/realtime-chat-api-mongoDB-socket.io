const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (mongoConnect) {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection succesfull '))
    .catch((err) => {
      console.log(err);
    });
};
