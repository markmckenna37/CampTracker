//api-routes.js - this file offers a set of routes for displaying and saving data to the db
// Dependencies
//Require model
const { Campsite } = require("../models");
//Routes
//GET ROUTES-This shows the data from the database on the page
module.exports = function (app) {
  // GET route for getting all posts
  app.get("/api/campsites/", function (req, res) {
    Campsite.findAll({}).then(function (Campsite) {
      res.json(Campsite);
    });
  });
  app.get("/api/campsites/rating/:rating", function (req, res) {
    Campsite.findOne({
      where: {
        rating: req.params.rating,
      },
    }).then(function (Campsite) {
      res.json(Campsite);
    });
  });
  app.get("/api/campsites/location/:location", function (req, res) {
    Campsite.findOne({
      where: {
        location: req.params.location,
      },
    }).then(function (Campsite) {
      res.json(Campsite);
    });
  });

  // post route to wishlist campsite
  // route to post to campsites
  app.post("/api/campsites", function (req, res) {
    console.log(req.body);
    if (req.body.rating) {
      Campsite.create({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        rating: req.body.rating,
        hasVisited: true,
      }).then(function (Campsite) {
        res.json(Campsite);
      });
    } else {
      Campsite.create({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
      }).then(function (Campsite) {
        res.json(Campsite);
      });
    }
  });

  app.put("/api/campsites/:id", (req, res) => {
    console.log(req.body);
    Campsite.update(
      {
        hasVisited: true,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((data) => {
      res.json(data);
    });
  });

  app.delete("/api/campsites/:id", function (req, res) {
    Campsite.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (Campsite) {
      res.json(Campsite);
    });
  });

  app.put("/api/campsites", function (req, res) {
    Campsite.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (Campsite) {
      res.json(Campsite);
    });
  });
};
