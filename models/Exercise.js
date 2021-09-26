const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  duration: {
    type: Integer,
  },
  weight: {
    type: Integer,
  },
  reps: {
    type: Integer,
  },
  sets: {
    type: Integer,
  },
});

const Exercise = mongoose.model("User", ExerciseSchema);

module.exports = Exercise;
