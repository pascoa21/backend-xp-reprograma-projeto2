const express = require('express');
const cors = require('cors')
const maravilhosas = express.Router();
const controller = require('../controllers/maravilhosas-controller')



//get /maravilhosas
maravilhosas.get('/maravilhosas', controller.getMaravilhosas)
//post /maravilhosas
maravilhosas.post('/maravilhosas', cors(), controller.addMaravilhosas)
//get /maravilhosas/id
maravilhosas.get('/maravilhosas/:id', cors(), controller.getMaravilhosasById)
//put /maravilhosas/id
maravilhosas.put('/maravilhosas/:id', cors(), controller.updateMaravilhosa)
//delete /maravilhosas/id
maravilhosas.delete('/maravilhosas/:id', cors(), controller.deleteMaravilhosa)


module.exports = maravilhosas;