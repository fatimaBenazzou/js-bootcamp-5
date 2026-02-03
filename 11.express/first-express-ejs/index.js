import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

const user = {
  firstName: "Fatima",
  lastName: "Benazzou",
  note: 15,
  skills: [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Redux Toolkit", level: "Intermediate" },
    { name: "React Native", level: "Intermediate" },
    { name: "Node.js", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Angular", level: "Intermediate" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "Docker", level: "Basic" },
    { name: "Figma", level: "Basic" },
  ],
};

// const config = { root: "./views" };
// const fileError = (res) => (err) => {
//   if (!err) return;
//   else res.send("Internal Error");
// };
// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/public", express.static("./public"));

// Routing
app.get("/", (req, res) => {
  res.render(`home`);
});

app.post("/note", (req, res) => {
  console.log(req.body);
  user.note = Number(req.body.exam);
  res.render(`note`);
});

app.get("/about", (req, res) => {
  res.locals = { user };
  res.render(`about`);
});

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
