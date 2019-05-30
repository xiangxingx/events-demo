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

$(btn).on('click', function () {
  $(popover).show() // jQuery 高版本不能用show？
  console.log(1)
  $(document).one('click', function () { // 只监听一次，且在btn被点击时
    $(popover).hide() // hide()
    console.log(3)
  })
})
$(wrapper).on('click', function (ev) {
  ev.stopPropagation()
  console.log(2)
})

