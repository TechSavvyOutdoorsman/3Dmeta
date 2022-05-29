/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()
// module.exports = {
//   env: {
//     PUBLIC_URL: '/',
//   }
// }
module.exports = withPlugins([
  [withTM],
  [withImages],
]), {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

