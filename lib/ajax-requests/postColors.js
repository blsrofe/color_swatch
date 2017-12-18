const $ = require('jquery')
const errorLog = require('../objects/errorLog')

const postColors = (colorArray) => {
  colorArray.forEach((color) => {
    $.post("https://color-swatch-api.herokuapp.com//api/v1/colors", { color: { value: `${color}` } })
    .catch(errorLog)
  })
}

module.exports = postColors
