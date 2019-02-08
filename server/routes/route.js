const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.get('/', (req,res)=>{
  console.log(req.params)
	db.getPlaceName(req.params.randy)
	.then(place => {
			console.log(place.name)
			res.json(place.name)
		}
	)
})

module.exports = router