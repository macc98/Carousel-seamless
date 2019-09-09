$('.p1').addClass('current').siblings().addClass('enter')
let n = 1
setInterval(() => {
  $('.p' + x(n)).removeClass('current').addClass('leave').one('transitionend', (e) => {
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('.p' + x(n + 1)).removeClass('enter').addClass('current')
  n++
}, 2000)

var size = $('img').length

function x(n) {
  n = n % size
  if (n === 0) {
    n = size
  }
  return n
}