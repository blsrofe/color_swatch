const $ = require('jquery')
const colors = require('../data/colors')

const parseText = () => {
  let text = $('section.text-submission textarea').val()
  let textArray = turnTextToArray(text)
  //put word into colorArray if it matches colors in data object
  let colorArray = checkTextForColors(textArray)
  console.log(colorArray)
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

module.exports = parseText
