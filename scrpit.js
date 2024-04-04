const previousButton = document.querySelector('.bi-chevron-left')

const nextButton = document.querySelector('.bi-chevron-right')

const slidesContainer = document.querySelector('.slides-container')

let index = 0

const maxIndex = 2

const setUi = () => {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`
}

previousButton.addEventListener('click', () => {
  if (index > 0) index--

  setUi()
})

nextButton.addEventListener('click', () => {
  if (index < maxIndex) index++

  setUi()
})
