var Measurment = require('../models/measurement');

module.exports = function(apiRouter) {

  //Routes end in api/measurements
  apiRouter.route('/measurements')

  //Create a measurent
   (POST localhost:8080/api/measurements)
  .post(function(req, res) {
    var measurent = new Measurment();
    measurent.date = req.body.date;
    measurent.measure = req.body.measure;

    measurent.save(function(err) {
      if (err) {
        // duplicate entry
        if (err.code == 11000) {
          return res.json({ success: false, message: 'A measurent with that date already exists. '});
        }
        else{
          return res.send(err);
        }
      }

      // return a message
      res.json({ message: 'Measument created!' });
    });
  })

  //Get all the measurents (GET localhost:8080/api/measurements)
  .get(function(req, res) {
    Measurment.find(
      {},
      {'_id':0, "__v":0},
      function(err, measurents) {
        if (err) {
          res.send(err);
          }
          // return the measurents
          res.json(measurents);
      }
    );
  });
}
