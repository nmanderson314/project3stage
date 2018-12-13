// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the locations
  app.get("/api/locations", function(req, res) {
    // var query = {};
    // if (req.query.user_id) {
    //   query.UserId = req.query.user_id;
    // }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Locations.findAll({
      // where: query,
      include: [db.Neighborhood]
    }).then(function(dbLocations) {
      res.json(dbLocations);
    });
  });

  // Get route for retrieving locations by neighborhood id
  app.get("/api/locations/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Locations.findOne({
      where: {
        NEIGHBORHOOD_ID: req.params.id
      },
      include: [db.Neighborhood]
    }).then(function(dbLocations) {
      res.json(dbLocations);
    });
  });

//   // locations route for saving a new locations
//   app.post("/api/locations", function(req, res) {
//     db.locations.create(req.body).then(function(dbLocations) {
//       res.json(dbLocations);
//     });
//   });

//   // DELETE route for deleting locationss
//   app.delete("/api/locations/:id", function(req, res) {
//     db.locations.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbLocations) {
//       res.json(dbLocations);
//     });
//   });

//   // PUT route for updating locationss
//   app.put("/api/locations", function(req, res) {
//     db.locations.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbLocations) {
//       res.json(dbLocations);
//     });
//   });
};
