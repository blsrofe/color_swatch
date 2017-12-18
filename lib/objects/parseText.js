const $ = require('jquery')

const parseText = () => {
  let text = $('section.text-submission textarea').val()
  let textArray = turnTextToArray(text)
  console.log(textArray)
}

const turnTextToArray = (text) => {
  return text.trim().split(" ")
}

module.exports = parseText
