const $ = require('jquery')
const getTopColor = require('../ajax-requests/getTopColor')
const parseText = require('../objects/parseText')
const triggerClick = require('../objects/triggerClick')

$(document).ready(() => {
  $('body').on('load', getTopColor())
  $('section.text-submission').on('click', 'button', parseText)
  $('section.text-submission').on('keypress', triggerClick)
})
