/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['three'])
const withImages = require('next-images')
module.exports = withTM()
module.exports = withImages()
