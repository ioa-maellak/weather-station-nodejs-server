//The configuration parameters.
module.exports = {
  //If any is available as an enviromental variable, use that value. Otherwise, use a default one.
  'ipaddress' : process.env.IP || '127.0.0.1',
  'port'      : process.env.PORT || 8080,
  'database'  : 'mongodb://localhost/measurements'
};

//Openshift configuration.
if (process.env.OPENSHIFT_NODEJS_IP) {
  module.exports.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
}
if (process.env.OPENSHIFT_NODEJS_PORT) {
  module.exports.port = process.env.OPENSHIFT_NODEJS_PORT;
}
if (process.env.OPENSHIFT_MONGODB_DB_USERNAME) {
  module.exports.database = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" + process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ':' + process.env.OPENSHIFT_MONGODB_DB_PORT + '/' + process.env.OPENSHIFT_APP_NAME;
}
