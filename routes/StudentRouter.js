const express = require('express');
const router = express.Router();
const {
    ShowStudents,
    AddStudents,
    UpdateStudent,
    DeleteStudents,
    searchStudent
} = require('../controller/StudentController');

router.route('/').
    post(AddStudents).
    get(ShowStudents);

router.route('/:id').
    get(searchStudent).
    delete(DeleteStudents).
    patch(UpdateStudent);

module.exports = router;