var restaurantData = require("../data/RestaurantData");

module.exports = function(app) {
  app.get("/api/restaurants", function(req, res) {
    res.json(restaurantData);
  });
};
