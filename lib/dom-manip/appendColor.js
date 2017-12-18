const $ = require('jquery')

const appendColor = (data) => {
  let color = data.value
  let colorCount = data.color_count
  $('.top-color').append(`${color} (${colorCount})`)
}

module.exports = appendColor
