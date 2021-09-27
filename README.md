# 18-workout-tracker
## Table of Contents
* [General info](#general-info)
* [Recording](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [User Story](#User-Story)
* [Business Context](#Business-Context)
* [Acceptance Criteria](#Acceptance-Criteria)

## General Info
Site to track your workouts


## Recording
Recording of the API working can be found here: https://drive.google.com/file/d/1i6JbUN8e-XKvpX2sLMJTeNqW2FxOWM_-/view

## Technologies
Project is created with:
* Nodejs
* Express
* Mongoose
* MongoDB

The example was deployed on Heroku.
https://rgultiano-18-workout-tracker.herokuapp.com/

## Setup
To setup the dependencies required for this project, copy the contents and run `npm install` in the root directory.

To run seed data run:
`npm run seed`

To run the server run:
`npm start`

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals more quickly when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

  * Add exercises to the most recent workout plan.

  * Add new exercises to a new workout plan.

  * View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

  * View the total duration of each workout from the past seven workouts on the `stats` page.