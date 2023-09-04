const mysql = require('mysql2');

const dbConnect = () => {
    try {
        const con = mysql.createConnection({
            host: process.env.USER_HOST,
            user: process.env.USER_ID,
            password: process.env.USER_PASSWORD,
            database: process.env.DATABASE
        })
        console.log(`the DB was connected in the ${process.env.USER_HOST} host sucessfully`);
        return con;
    }

    catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

module.exports = dbConnect;