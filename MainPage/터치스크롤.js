const wrapper = document.querySelector('.movie-wrapper')
const wrapper1 = document.querySelector('.movie-wrapper1')
const wrapper2 = document.querySelector('.movie-wrapper2')
const wrapper3 = document.querySelector('.movie-wrapper3')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper1.addEventListener('mousedown', function (e) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper2.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper3.addEventListener('mousedown', function (e) {
  pressed = true
  startX = e.clientX
  this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
  pressed = false
})

wrapper1.addEventListener('mouseleave', function (e) {
    pressed = false
})

wrapper2.addEventListener('mouseleave', function (e) {
  pressed = false
})

wrapper3.addEventListener('mouseleave', function (e) {
  pressed = false
})

window.addEventListener('mouseup', function (e) {
  pressed = false
  wrapper.style.cursor = 'grab'
  wrapper1.style.cursor = 'grab'
  wrapper2.style.cursor = 'grab'
  wrapper3.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
  if(!pressed) {
    return
  }

  this.scrollLeft += startX - e.clientX
})

wrapper1.addEventListener('mousemove', function (e) {
    if(!pressed) {
    return
    }

    this.scrollLeft += startX - e.clientX
})


wrapper2.addEventListener('mousemove', function (e) {
  if(!pressed) {
  return
  }

  this.scrollLeft += startX - e.clientX
})

wrapper3.addEventListener('mousemove', function (e) {
  if(!pressed) {
  return
  }

  this.scrollLeft += startX - e.clientX
})