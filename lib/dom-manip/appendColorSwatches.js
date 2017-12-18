const $ = require('jquery')
const colorObject = require('../data/colors')

const appendColorSwatches = (colorArray) => {
  $('article.colorized-text').empty()
  colorArray.forEach((color) => {
    let hexCode = colorObject[color]
    $('article.colorized-text').append(`<div class="swatch" style="background-color:${hexCode};"></div>`)
  })
}


module.exports = appendColorSwatches
