var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  salary: Number,
  birthdate: String,
  dni: Number,
  cuil: Number,
  profession: String,
  phone: Number,
  email: String,
  address:   {
    country: String,
    state: String,
    city: String,
    street: String,
    number: Number,
    zipCode: Number
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
