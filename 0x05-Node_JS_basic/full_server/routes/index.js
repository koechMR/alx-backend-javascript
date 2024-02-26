const express = require('express');
const router = express.Router();

const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Link the route / to the AppController
router.get('/', AppController.index);

// Link the route /students to the StudentsController
router.get('/students', StudentsController.getAllStudents);

// Link the route /students/:major to the StudentsController
router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;
