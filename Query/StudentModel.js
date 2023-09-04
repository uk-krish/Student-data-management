const mysql = require('mysql');

const StudentSchema = {
    add: `INSERT INTO students (FirstName, LastName, Email) VALUES (?,?,?)`,
    display: 'SELECT * FROM students',
    search: "SELECT * FROM students WHERE StudentID=?",
    update: 'UPDATE students SET ? WHERE StudentID=?',
    delete: 'DELETE FROM students WHERE StudentID=?'
}

module.exports = StudentSchema;