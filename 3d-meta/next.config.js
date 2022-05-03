/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
module.exports = {
  env: {
    PUBLIC_URL: '/',
  }
}

