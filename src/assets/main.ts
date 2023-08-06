import Motus from 'motus'

// Get all the elements
// TODO: check WHEN does this script get executed in production
const header = document.getElementById('header')
const heroDesc = document.getElementById('hero-desc')
const heroPhoto = document.getElementById('hero-photo')


/* --------------------------------------------------------------------------
  STICKY HEADER
-------------------------------------------------------------------------- */
new IntersectionObserver(e => {
  if (e[0]?.intersectionRatio <= 0)
    header.classList.add('show')
  else
    header.classList.remove('show')
}, {
  threshold: [0, 0.25, 0.5, 0.75, 1],
}).observe(heroDesc)


/* --------------------------------------------------------------------------
  Motus parallax animations
-------------------------------------------------------------------------- */
const heroPhotoParallax = new Motus.Animation({
  $el: heroPhoto,
  startPoint: 0,
  endPoint: 600,
  keyframes: [
    { translateY: -100 },
  ],
})
Motus.addAnimation(heroPhotoParallax)

const heroDescParallax = new Motus.Animation({
  $el: heroDesc,
  startPoint: 0,
  endPoint: 500,
  keyframes: [
    { translateY: 8 },
  ],
})
Motus.addAnimation(heroDescParallax)
