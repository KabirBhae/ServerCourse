const express = require('express');
var router = express.Router();

const homeControllers = require("./controllers/homeControllers")
const bookControllers = require("./controllers/bookControllers")
   

router.get('/',homeControllers.home)
router.get('/addBooks',bookControllers.addBooks)
router.post('/addBooks',bookControllers.postBooks)

module.exports = router