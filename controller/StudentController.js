const schema = require("../Query/StudentModel");
const dbConnect = require("../config/dbconnect");
const con = dbConnect();

const ShowStudents = async (req, res) => {
  try {
    con.query(schema.display, (err, result) => {
      if (!err) {
        res.status(200).json(result);
      } else {
      }
    });
  }
  catch (error) {
    res.send(error);
  }
};

const AddStudents = async (req, res) => {
  try {
    const values = Object.values(req.body);
    const result1 = await new Promise((resolve, reject) => {
      con.query(schema.add, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    res.json(result1);
  }
  catch (err) {
    res.send(err);
  }
};

const searchStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const result1 = await new Promise((resolve, reject) => {
      con.query(schema.search, id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    res.json(result1);
  }
  catch (err) {
    res.send(err);
  }
};

const DeleteStudents = async (req, res) => {
  const id = req.params.id;
  try {
    const result1 = await new Promise((resolve, reject) => {
      con.query(schema.delete, id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    res.json(result1.affectedRows > 0 ? "Deleted" : "Unable to find data");
  }
  catch (err) {
    res.send(err);
  }
};

const UpdateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const result1 = await new Promise((resolve, reject) => {
      con.query(schema.update, [req.body, id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    res.json(result1.affectedRows > 0 ? "Deleted" : "Unable to find data");
  }
  catch (error) {
    res.send(error);
  }
};

module.exports = {
  ShowStudents,
  AddStudents,
  searchStudent,
  DeleteStudents,
  UpdateStudent,
};
