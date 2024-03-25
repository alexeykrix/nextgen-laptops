import './assets/scss/pages/main.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let observer = null


const data = [
  { title: 'XtremePro 15', description: 'i5-1135G7, 8GB RAM, GTX 1650', price: '$678' },
  { title: 'TechWave UltraBook', description: 'i7-1165G7, 16GB RAM, GTX 1650 Ti', price: '$743' },
  { title: 'VisionX2 Gaming', description: 'i7-1185G7, 32GB RAM, RTX 3050', price: '$1090' },
  { title: 'SleekPad Infinity', description: 'i9-11900H, 16GB RAM, RTX 3050 Ti', price: '$963' },
  { title: 'MaxCore Workstation', description: 'i5-11400H, 8GB RAM, GTX 1660 Ti', price: '$885' },
  { title: 'EcoFlex 14', description: 'i7-10870H, 16GB RAM, RTX 3060', price: '$1118' },
  { title: 'UltraStream 17', description: 'Ryzen 7 5800H, 16GB RAM, RTX 3070', price: '$1496' },
  { title: 'ProGamer X', description: 'Ryzen 5 5600H, 8GB RAM, GTX 1650', price: '$690' },
  { title: 'EliteBook S', description: 'Ryzen 9 5900HX, 32GB RAM, RTX 3080', price: '$1506' },
  { title: 'HyperDrive 15', description: 'i7-10750H, 16GB RAM, RTX 2070', price: '$1332' },
  { title: 'Zenith Master', description: 'i9-10980HK, 32GB RAM, RTX 2080', price: '$1401' },
  { title: 'QuantumLeap Pro', description: 'Ryzen 7 4800H, 16GB RAM, GTX 1660 Ti', price: '$931' },
  { title: 'NextGen Elite', description: 'i7-9750H, 16GB RAM, RTX 2060', price: '$1049' },
  { title: 'CyberSpace X', description: 'Ryzen 5 4600H, 8GB RAM, GTX 1650 Ti', price: '$732' },
  { title: 'TerraFirma Z15', description: 'i7-10510U, 8GB RAM, MX250', price: '$556' },
  { title: 'NovaPulse X1', description: 'Ryzen 3 3300U, 4GB RAM, Vega 6', price: '$398' }
]


const getRandomTitle = () => {
  const titles = data.map(el => el.title)
  return titles[Math.floor(Math.random() * titles.length)]
}

const getRandomDescription = () => {
  const descriptions = data.map(el => el.description)
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

const getRandomPrice = () => {
  const prices = data.map(el => el.price)
  return prices[Math.floor(Math.random() * prices.length)]
}

const getRandomColor = () => {
  return `sepia(${ Math.random() }) hue-rotate(${ Math.random()*360 }deg)`;
}


const generateCards = () => {
  const cardTemplate = document.querySelector('#card-template')
  const container = document.querySelector('.catalog-grid')

  for (let i = 0; i < 16; i++) {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('img').src = `./img/cards/card-${ Math.floor(Math.random()*5) }.webp`
    card.querySelector('.catalog-card__title').innerHTML = getRandomTitle()
    card.querySelector('.catalog-card__description').innerHTML = getRandomDescription()
    card.querySelector('.catalog-card__btn').innerHTML = getRandomPrice()
    card.querySelector('img').style.filter = getRandomColor()
    container.appendChild(card)
  }

  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 0)
}

const createIntersectionObserver = () => {
  const end = document.querySelector('.catalog-loading')
  let timeout = null
  observer = new IntersectionObserver((e) => {
    const isIntersecting = e[0].isIntersecting
    if (isIntersecting) {
      if (timeout) return 
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        timeout = null
        generateCards()
      }, 2000)
    }
  })

  observer.observe(end)

}

const init = () => {
  generateCards()
  createIntersectionObserver()
}

const startAnimation = () => {
  document.body.style.opacity = 1

  const headings = document.querySelectorAll('h1')
  headings.forEach(el => {
    gsap.from(el, {
      y: 20,
      opacity: 0,
      rotate: 5,
      transformOrigin: 'left center',
      duration: 1,
      delay: 0.2,
  
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom bottom',
      }
    })
  })

  const images = document.querySelectorAll('.hero-image__part')
  images.forEach((el, id) => {
    gsap.from(el, {
      y: '-100vh',
      rotate: 5,
      transformOrigin: 'left center',
      duration: 1,
      delay: 0.3 + id * 0.05,
    })
  })


  const buttons = document.querySelectorAll('.catalog-filters__list .btn')
  buttons.forEach((el, id) => {
    gsap.from(el, {
      x: 15,
      opacity: 0,
      rotate: 5,
      transformOrigin: 'left center',
      duration: 0.6,
      delay: 0.2 + id * 0.05,
  
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom bottom',
      }
    })
  })


}


document.addEventListener('DOMContentLoaded', init)
document.fonts.ready.then( () => {
  startAnimation()
})
