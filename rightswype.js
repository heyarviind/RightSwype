// Basically, what it does is, selects the right swipe button class name, and keeps clicking
var swype  = document.getElementsByClassName("recsGamepad__button--like")
setInterval(function() {
  swype[0].click()
}, 1000)
