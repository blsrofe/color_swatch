const $ = require('jquery')
const getTopColor = require('../ajax-requests/getTopColor')
const parseText = require('../objects/parseText')

$(document).ready(() => {
  $('body').on('load', getTopColor())
  $('section.text-submission').on('click', 'button', parseText)
})
