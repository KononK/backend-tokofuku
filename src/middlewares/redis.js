const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)
const helpers = require('../helpers/helpers')

module.exports = {
  cacheAllProducts: (req, res, next) => {
    client.get('getAllProducts', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },
  cacheAllCategories: (req, res, next) => {
    client.get('getAllCategories', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },
  cacheAllUsers: (req, res, next) => {
    client.get('getAllUsers', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },
  cacheDetailUser: (req, res, next) => {
    client.get('getDetailUser', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },

  cacheSetting: (req, res, next) => {
    client.get('getSetting', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },
  cacheAllRatings: (req, res, next) => {
    client.get('getDetailUser', (err, data) => {
      if (err) throw err
      if (data) {
        helpers.response(res, JSON.parse(data), 200, helpers.status.found, null)
      } else {
        next()
      }
    })
  },
}