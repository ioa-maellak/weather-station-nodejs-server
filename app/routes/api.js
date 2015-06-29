module.exports = function(app, express) {
  //Create a router.
  var apiRouter = express.Router();

  //The base root accesed using GET at /api.
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'Api works.' });
  });

  //Set the route for /api/user.
  require('./apiMeasurments')(apiRouter);

  //The router is returned.
  return apiRouter;
}
