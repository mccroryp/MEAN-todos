const router = require('express').Router();

router.get('/', function(req, res, next){
    res.send("Hello, world @ index");
});

module.exports = router;