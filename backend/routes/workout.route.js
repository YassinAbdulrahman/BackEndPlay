const express = require("express");
const {getAllWorkouts , getSingleWorkout , createWorkout , deleteWorkout , updateWorkout} = require("../controllers/workoutcontroller.js");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);
module.exports = router;
