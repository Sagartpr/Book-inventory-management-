const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const app = express();


connectDB();


app.use(bodyParser.json());


app.use('/auth', require('./routes/auth'));
app.use('/admin', require('./routes/admin'));
app.use('/user', require('./routes/user'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));    



