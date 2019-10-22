// request.route.js

const express = require('express');
const app = express();
const requestRoutes = express.Router();

// Require Request model in our routes module
let Request = require('../models/Request');

// Defined store route
requestRoutes.route('/add').post(function (req, res) {
  let request = new Request(req.body);
  request.save()
    .then(request => {
      res.status(200).json({'Request': 'Request has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
requestRoutes.route('/').get(function (req, res) {
  Request.find(function (err, requests){
    if(err){
      console.log(err);
    }
    else {
      res.json(requests);
    }
  });
});

// Defined edit route
requestRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Request.findById(id, function (err, request){
      res.json(request);
  });
});

//  Defined update route
requestRoutes.route('/update/:id').post(function (req, res) {
  Request.findById(req.params.id, function(err, request) {
    if (!request)
      res.status(404).send("Record not found");
    else {
      request.FacultyName = req.body.FacultyNametName;
      request.BannerID = req.body.BannerID;
      request.Destination = req.body.Destination;
      request.Purpose = req.body.Purpose;
      request.StartDate = req.body.StartDate;
      request.EndDate = req.body.EndDate;
      request.CarSize = req.body.CarSize;
      request.CarReason = req.body.CarReason;
      request.FOPName = req.body.FOPName;
      request.FOPComments = req.body.FOPComments;
      request.AdditionalNotes = req.body.AdditionalNotes;

      request.save().then(request => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
requestRoutes.route('/delete/:id').get(function (req, res) {
    Request.findByIdAndRemove({_id: req.params.id}, function(err, request){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = requestRoutes;
