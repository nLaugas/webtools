var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

/* GET ALL EMPLOYEES */
router.get('/', function(req, res, next) {
  Employee.find(function (err, employees) {
    if (err) return next(err);
    res.json(employees);
  });
});

/* GET SINGLE EMPLOYEE BY ID */
router.get('/:id', function(req, res, next) {
  Employee.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE EMPLOYEE */
router.post('/', function(req, res, next) {
  Employee.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE EMPLOYEE */
router.put('/:id', function(req, res, next) {
  Employee.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE EMPLOYEE */
router.delete('/:id', function(req, res, next) {
  Employee.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
