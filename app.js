const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
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

//Middleware
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

//BodyParser
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

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
  console.log("Servidor rodando na url https://localhost:8081");
});
