const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')

var translateX = 0
var count = 2

next.addEventListener('click', function (event) {
    event.preventDefault()
    if(count == 1){
        return false
    }
    translateX += -1300
    comment.style.transform = `translateX(${translateX}px)`
    count--
})
prev.addEventListener('click', function (event) {
    event.preventDefault()
    if (count == 2) {
      // Xem hết bình luận
      return false
    }
    translateX += 1300
    comment.style.transform = `translateX(${translateX}px)`
    count++
  })
  