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
    <main>
        <h1>About me</h1>
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>My note is: ${user.note}</p>
    </main>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
