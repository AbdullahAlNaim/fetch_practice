const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/cars');

const c = mongoose.model('cars', {
    name: { type: String },
})

mongoose.findOne({ name: 'mustang' }, function (err, docs) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('First funcion call: ', docs);
    }
});