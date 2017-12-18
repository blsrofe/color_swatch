const $ = require('jquery')
const appendColor = require('../dom-manip/appendColor')
const errorLog = require('../objects/errorLog')

const getTopColor = () => {
  $.get("https://color-swatch-api.herokuapp.com//api/v1/top_color")
  .then(appendColor)
  .catch(errorLog)
}

module.exports = getTopColor
