import { Router } from "express";
import { checkAuth } from "../middlewares/auth.js";
import {
  createTodo,
  deleteCompletedTodos,
  deleteTodo,
  editTodo,
  getTodos,
} from "../handlers/todos.js";

const todoRouter = Router();

todoRouter.use(checkAuth);

// todoRouter.get("/", () => {});
// todoRouter.post("/", () => {});
todoRouter.route("/").get(getTodos).post(createTodo);

todoRouter.delete("/completed", deleteCompletedTodos);

//   todoRouter.put("/:id", () => {});
//   todoRouter.delete("/:id", () => {});
todoRouter.route("/:id").put(editTodo).delete(deleteTodo);

export default todoRouter;
