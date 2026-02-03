import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`The app is on http://localhost:${PORT}`);
  });
});
