const atImport = require('postcss-import')
const postcssCustomMedia = require('postcss-custom-media')
const tailwindNesting = require('@tailwindcss/nesting')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    atImport(),
    postcssCustomMedia(),
    tailwindNesting(),
    autoprefixer(),
    cssnano(),
  ],
}
