import '../assets/scss/pages/product.scss'

const galleryThumbs = document.querySelectorAll('.gallery-thumbs__btn')

galleryThumbs.forEach(el => {
  el.addEventListener('click', e => {
    galleryThumbs.forEach(thumb => thumb.classList.remove('-active'))
    el.classList.add('-active')
  })
})

document.addEventListener('DOMContentLoaded', () => {
  document.fonts.ready.then( () => {
    document.body.style.opacity = '1'
  })



  const productData = JSON.parse(localStorage.getItem('product'))
  console.log('productData: ', productData);

  const productImgs = document.querySelectorAll('.gallery img')
  const productTitle = document.querySelector('.product-title')
  const productDescription = document.querySelector('.product-description')
  const productPrice = document.querySelector('.product-price')

  productImgs.forEach(el => {
    el.src = productData.img
    el.style.filter = productData.filter
  })

  productTitle.innerHTML = productData.title
  productDescription.innerHTML = productData.description
  productPrice.innerHTML = productData.price

})