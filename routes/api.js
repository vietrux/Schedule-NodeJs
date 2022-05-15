var express = require('express');
var router = express.Router();
var DayController = require('../controllers/day');
var TaskController = require('../controllers/task');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hello friends');
});

//get all day
router.get('/get/allday', async function (req, res, next) {
  try {
    let day = await DayController.getAllDay();
    res.json(day);  
  } catch (e) { 
    console.log(e);
  }
});

//get one day
router.get('/get/day', async function (req, res, next) {
  try {
    let day = await DayController.getDayByDay(req.query);
    res.json(day);  
  } catch (e) { 
    console.log(e);
  }
});


// Get task
router.get('/get/task', async function (req, res, next) {
  try {
    let task = await TaskController.getTask();
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

// Get task by subject
router.get('/get/taskbysubj', async function (req, res, next) {
  try {
    let task = await TaskController.getTaskBySubject(req.query);
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

// Add task
router.post('/add/task', async function (req, res, next) {
  try {
    let task = await TaskController.addTask(req.body);
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

// Delete task
router.get('/delete/task', async function (req, res, next) {
  try {
    let task = await TaskController.deleteTask(req.query);
    res.json(task);
  } catch (e) {
    console.log(e);
  }
});

// Edit day
router.post('/update/day', async function (req, res, next) {
  try {
    let day = await DayController.updateDay(req.body);
    return res.json(day);
  } catch (e) {
    console.log(e);
  }
});


module.exports = router;
