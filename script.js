const splideList = document.querySelector('.splide__list')
const basePath = './public/images/'
const photoFileNames = [
  'forecast_history.png',
  'forecast.png',
  'rainy_day_home.png',
  'no_shoes_no_service.png',
  'burger_0.png',
  'burger_6.jpg',
  'pickles.jpg',
  'fried_pickles.png',
  'oatmeal_1.jpg',
  'oatmeal_3.jpg',
  'cafe_1.jpg',
]

function populateCarousel() {
  photoFileNames.forEach((fileName) => {
    fileName = basePath.concat(fileName)
    const listItem = document.createElement('li')
    const image = document.createElement('img')
    listItem.setAttribute('class', 'splide__slide')
    image.setAttribute('src', fileName)
    listItem.appendChild(image)
    splideList.appendChild(listItem)
  })
}

populateCarousel()

