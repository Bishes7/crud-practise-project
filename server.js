// Import express at first
import express from "express";

import userRouter from "./src/UserRouter.js";

const app = express();
const PORT = 8000;

// Middleware to post body implemented
app.use(express.json());

// Need to use the middleware
app.use("/api/v1/users", userRouter);

// Push it in the url

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
