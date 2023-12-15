var jsonServer = require('json-server');
var demodata = require('./db.json');
var app = jsonServer.create();
var router = jsonServer.router(demodata);     
var middlewares = jsonServer.defaults();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(middlewares);
app.use(router)

app.listen(5000, () => {
  console.log("JSON Server is running");
});