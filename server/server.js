const app = require('./app');
const mongoConnect = require('./src/config/database');

mongoConnect();

const port = process.env.PORT;
app.listen(port, () => {
  console.log();
  console.log(`Listening on Port ${port}`);
});
