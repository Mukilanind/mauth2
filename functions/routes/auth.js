var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  //   Middleware to be defined here
  next()
})

router.get('/', function (req, res) {
  res.send('Stuff Missing Here')
})

// define the about route
router.get('/v2', function (req, res) {
  res.send('V2')
})

module.exports = router