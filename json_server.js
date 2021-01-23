var jsonServer  = require('json-server')
var server      = jsonServer.create()
var router      = jsonServer.router(require('./mock_database')())
var middlewares = jsonServer.defaults()
router.render = (req,res) =>{
    const path = req.url;
    const method = req.method.toLowerCase(); 
    const db_data = require('./mock_database/database'+ path + '/index.' + method + '.json');
    res.status(200).jsonp(db_data);
}
server.use(middlewares)
server.use(router)
server.listen(3000, function () {
console.log('JSON Server is running')
})