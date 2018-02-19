var config  = require('../config/api.config');
var Server  = require('./server');
var options = {
  hbase: config.get('hbase'),
  ripple: config.get('ripple'),
  port: config.get('port'),
  server: config.get('server'),
  host: config.get('host')
};
//012
var server = new Server(options);
