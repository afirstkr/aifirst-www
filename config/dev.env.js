'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_LOCATION: '"http://localhost:8081"',
  API_LOCATION: '"http://dev.aifirst.kr:8081"',
  API_CLIENT_ID: '""',
  API_CLIENT_SECRET: '""'
})
