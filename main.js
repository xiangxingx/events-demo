/* btn.addEventListener('click', function () {
  popover.style.display = 'block'
  console.log(1)
})
wrapper.addEventListener('click', function (ev) {
  ev.stopPropagation()
  console.log(3)
})
document.addEventListener('click', function () {
  popover.style.display = 'none'
  console.log(2)
}) */

let target = true
$(btn).on('click', function () {
  if (target) {
    $(popover).show() // jQuery 高版本不能用show？
  } else {
    $(popover).hide()
  }
  $(document).one('click', function () { // 只监听一次，且在btn被点击时
    $(popover).hide() // hide()
    target = !target
    console.log('document',target)
  })
  target = !target
  console.log('btn',target)
})

$(wrapper).on('click', function (ev) {
  ev.stopPropagation()
})

