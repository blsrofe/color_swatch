const $ = require('jquery')

const triggerClick = (event) => {
  if(event.which == 13){
      $('button').click()
  }
}

module.exports = triggerClick
