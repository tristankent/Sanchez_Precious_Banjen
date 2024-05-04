const pageAFront = document.querySelector('.page-A-front'),
      pageBFront = document.querySelector('.page-B-front'),
      pageABack = document.querySelector('.page-A-back'),
      pageBBack = document.querySelector('.page-B-back'),
      pageCFront = document.querySelector('.page-C-front'),
      pageCBack = document.querySelector('.page-C-back'),
      bookContainer = document.querySelector('.book-container')

let angle = '-180deg'

const pageOrientation = () =>{
   bookContainer.getBoundingClientRect().width > bookContainer.getBoundingClientRect().height ? angle = '-180deg' : angle = '180deg'
  console.log(angle)
}

pageOrientation()

pageAFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', angle)
  document.documentElement.style.setProperty('--translate', '100%')
})

pageBFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', angle)
  document.documentElement.style.setProperty('--z-index-A', '1')
})

pageCFront.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', angle)
  document.documentElement.style.setProperty('--translate', '150%')
  document.documentElement.style.setProperty('--z-index-C', '10')
})

pageABack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-A', '0deg')
  document.documentElement.style.setProperty('--translate', '50%')
  document.documentElement.style.setProperty('--z-index-A', '10')
})

pageBBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-B', '0deg')
  document.documentElement.style.setProperty('--z-index-C', '1')
})


pageCBack.addEventListener('click', () => {
  document.documentElement.style.setProperty('--rotate-C', '0deg')
  document.documentElement.style.setProperty('--translate', '100%')
})

// Listen for resize changes
window.addEventListener("resize", function() {
  pageOrientation()
}, false);