var environment = process.env.NODE_ENV || 'development'
var config = require('../../knexfile')[environment]
var db = require('knex')(config)

module.exports = {
  getPlaceName
}

function getPlaceName(){
  return db('locations').whereIn()
}