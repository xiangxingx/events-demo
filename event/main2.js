var n = 1
$('div').on('click', function (ev) {
  setTimeout(() => {
    $(ev.currentTarget).addClass('active')
  }, n * 500);
  n += 1
})
