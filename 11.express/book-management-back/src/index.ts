import "dotenv/config";
import { connectDB } from "./services/db.js";
import { logger } from "./utils/logger.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Failed to start server:", { error });
    process.exit(1);
  });
