const { default: mongoose } = require("mongoose");
const Workout = require("../models/workouts.model.js");

// get all workouts
const getAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  if (!workouts) {
    return res.status(404).json({ error: "No Workouts Found" });
  }
  res.status(200).json({ workouts });
};

//get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }
  res.status(200).json({ workout });
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "No Such Workout" });
  }

  res.status(200).json({ workout });
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) {
    return res.status(404).json({ error: "No Such Workout" });
  }

  res.status(200).json({ workout });
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
