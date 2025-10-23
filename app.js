const express = require("express");
const app = express();
const session = require("express-session");
const handlebars = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const api = require("./controllers/ProdutoControllers");

//Configurações

//Sessão
app.use(
  session({
    secret: "processoseletivo",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

//BodyParser
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

//Middleware
app.use(methodOverride("_method"));
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

//Handlebars
app.set("views", path.join(__dirname, "controllers"));
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Public
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", api);

//Servidor online
const PORTA = 8081;
app.listen(PORTA, function () {
  console.log("Servidor rodando na url http://localhost:8081/api/produtos");
});
