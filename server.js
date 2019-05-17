const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var profile = require("./profile");
const accountSid = "AC12f809c0f491bb22d9de11e0ae1f8f";
const authToken = "6a0a88c5b79189e2e9b14d2ccf9f64ea";

const client = require("twilio")(accountSid, authToken);

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/profile", profile);
app.set("views", "./views");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.post("/thanks", (req, res) => {
  console.log(accountSid, authToken);
  console.log(req.body);
  client.messages
    .create({
      to: "16194848576",
      from: "6193050958",
      body: `${req.body.name} (${req.body.email}) - ${req.body.subject}`
    })
    .then(message => {
      console.log('this route');
      console.log(message.sid);
      res.render("thanks", { contact: req.body });
    })
    .catch(err => console.log(err));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening at http://localhost:3000");
});

