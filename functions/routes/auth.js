var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('Stuff Missing Here')
})

// define the about route
router.get('/v2', (req, res) => {
  res.send('V2')
})

module.exports = router