const mongoose = require('mongoose');

const db = await mongoose.connect('mongodb://nongo/mydatabase');

exports.modules = db;