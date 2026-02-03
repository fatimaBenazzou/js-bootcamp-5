import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

const user = {
  firstName: "Fatima",
  lastName: "Benazzou",
  note: 15,
};

const config = { root: "./views" };
const fileError = (res) => (err) => {
  if (!err) return;
  else res.send("Internal Error");
};
// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/public", express.static("./public"));

// Routing
app.get("/", (req, res) => {
  res.sendFile(`home.html`, config, fileError(res));
});

app.post("/note", (req, res) => {
  console.log(req.body);
  user.note = Number(req.body.exam);
  res.sendFile(`note.html`, config, fileError(res));
});

app.get("/about", (req, res) => {
  res.send(`
   
    `);
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
