const $ = require('jquery')
const colors = require('../data/colors')
const appendColorSwatches = require('../dom-manip/appendColorSwatches')
const postColors = require('../ajax-requests/postColors')

const parseText = () => {
  let text = $('section.text-submission textarea').val()
  let textArray = turnTextToArray(text)
  let colorArray = checkTextForColors(textArray)
  postColors(colorArray)
  let uniqueArray = deleteDuplicates(colorArray)
  appendColorSwatches(uniqueArray)
}

const turnTextToArray = (text) => {
  let punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let finalString = punctuationless.replace(/\s{2,}/g," ");
  return finalString.trim().split(" ")
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
