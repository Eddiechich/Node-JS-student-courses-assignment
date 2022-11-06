// --- express, cors, body-parser ---

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// --- Main Routes ---

    app.get('/', (req,res) => {
        res.send('Welcome to our database demo server root');
    })

// --- Courses Routes ---

    // require courses routes,
    // then tell express to use the above routes and set their base path
    const courseRoutes = require('./routes/course.routes');
    app.use('/api/courses', courseRoutes);

    /*
    const studentsRoutes = require('./routes/student.routes');
    app.use('/api/students', studentsRoutes);
    */

// --- Server Listen ---

app.listen(5000, () => {
    console.log(`\n=========${new Date().toDateString()}=======`)
    console.log('[v] Server is up and running on port http://localhost:5000');
})