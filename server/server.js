const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const users = require('./routes/users');
const app = express();
app.use(express.json())
app.use(cors());

mongoose
.connect(`mongodb+srv://zaeemzafar79:aezakmi90@cluster0.ihjosos.mongodb.net/DUANE_BAKERS?retryWrites=true&w=majority`)
.then((res) => console.log(`Database Connected successfullly`))
.catch((err) => console.log(`Database Not Connected`))

app.use('/users',users);



app.listen(3000, () => {
    console.log('App listening on port 3000@@');
});