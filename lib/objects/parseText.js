const $ = require('jquery')
const colors = require('../data/colors')

const parseText = () => {
  let text = $('section.text-submission textarea').val()
  let textArray = turnTextToArray(text)
  let colorArray = checkTextForColors(textArray)
  let uniqueArray = deleteDuplicates(colorArray)
  
}

const turnTextToArray = (text) => {
  return text.trim().split(" ")
}

const checkTextForColors = (textArray) => {
  let colorArray = []
  textArray.forEach((word) => {
    let downCasedWord = word.toLowerCase()
    if(downCasedWord in colors) {
      colorArray.push(downCasedWord)
    }
  })
  return colorArray
}

const deleteDuplicates = (array) => {
  let uniqueArray = []
  $.each(array, function(i, el){
      if($.inArray(el, uniqueArray) === -1) uniqueArray.push(el)
  })
  return uniqueArray
}

module.exports = parseText
