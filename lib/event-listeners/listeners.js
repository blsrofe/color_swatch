const $ = require('jquery')
const getTopColor = require('../ajax-requests/getTopColor')

$(document).ready(() => {
  $('body').on('load', getTopColor())
})
