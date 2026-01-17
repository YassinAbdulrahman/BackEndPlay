require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const workoutRoutes = require("./routes/workout.route");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

app.use((req, res, next) => {
  console.log(req.method, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.listen(PORT, () => {
  console.log(`Connected to MongoDB http://localhost:${PORT}`);
});
