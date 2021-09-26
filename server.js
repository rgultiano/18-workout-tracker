const express = require("express");
const mongoose = require("mongoose");

const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public",{
    extensions: ['html', 'htm'],
}));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([{
        "$match": {}
        },
        {
          "$addFields": {
            "totalDuration": {
              "$reduce": {
                 input: "$exercises",
                 initialValue: 0,
                 in: { 
                   $add: ["$$value", "$$this.duration"]
                 }
               }
            }
          }
    }]).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});


app.get("/api/workouts/range", ({body}, res) => {
    db.Workout.aggregate([{
        "$match": {}
        },
        {
          "$addFields": {
            "totalDuration": {
              "$reduce": {
                 input: "$exercises",
                 initialValue: 0,
                 in: { 
                   $add: ["$$value", "$$this.duration"]
                 }
               }
            }
          }
    }]).sort('-date').limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/:id", (req, res) => {
    db.Workout.find({_id: req.params.id})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", ({body}, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
  });

app.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findOneAndUpdate({_id: params.id}, {$push: {'exercises': body}}, )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});