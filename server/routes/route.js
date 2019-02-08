const express = require('express')
const db = require('../db/db')
const router = express.Router()


router.post('/', (req,res)=>{
	db.getPlaceName(req.body)
	.then(place => {
			res.json(place)
		}
	)
})

module.exports = router