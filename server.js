var express = require('express');
var controller = require(__dirname+ '/db/controllers.js');
var bodyParser = require('body-parser');

var server = express();
var router = express.Router();

server.use(bodyParser.urlencoded({
    extended: true
}))
server.use(express.static(__dirname + '/Client'))
server.use('/compiled', express.static(__dirname + '/compiled'));
router.get('/todos', controller.get);
router.post('/todos', controller.post);
server.use('/data', router);
server.listen(8080, () => console.log('Listening on 8080'));