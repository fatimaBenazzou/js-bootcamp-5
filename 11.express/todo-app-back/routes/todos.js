import { Router } from "express";
import { checkAuth } from "../middlewares/auth.js";
import { createTodo, deleteTodo, getTodos } from "../handlers/todos.js";

const todoRouter = Router();

todoRouter.use(checkAuth);

// todoRouter.get("/", () => {});
// todoRouter.post("/", () => {});
todoRouter.route("/").get(getTodos).post(createTodo);

//   todoRouter.put("/:id", () => {});
//   todoRouter.delete("/:id", () => {});
todoRouter
  .route("/:id")
  .put(() => {})
  .delete(deleteTodo);

todoRouter.delete("/completed", () => {});

export default todoRouter;
