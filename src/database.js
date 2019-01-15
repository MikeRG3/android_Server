const mongoose = require('mongoose');

//CONECT TO DB
mongoose.connect('mongodb://admin:a123456@ds151651.mlab.com:51651/android', { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});