import Motus from 'motus'

// On every (Astro) page load...
document.addEventListener('astro:load', () => {

  // TODO: figure out a better way to handle route detection
  const isHomePage = /^\/(#.*)?$/.test(window.location.pathname)
  const isCaseStudy = window.location.pathname.includes('case-study')

  // Get all common/useful elements
  const header = document.getElementById('header')
  const heroDesc = document.getElementById('hero-desc')
  const heroPhoto = document.getElementById('hero-photo')


  /* --------------------------------------------------------------------------
    Smooth scroll any #hash links
  -------------------------------------------------------------------------- */
  document.querySelectorAll('a[data-smooth-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })


  /* --------------------------------------------------------------------------
    STICKY HEADER
    Probably just on the homepage for now
  -------------------------------------------------------------------------- */
  if (isHomePage && heroDesc) {
    new IntersectionObserver(e => {
      if (e[0]?.intersectionRatio <= 0)
        header.classList.add('show')
      else
        header.classList.remove('show')
    }, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }).observe(heroDesc)
  }


  /* --------------------------------------------------------------------------
    Homepage hero parallax
  -------------------------------------------------------------------------- */
  if (isHomePage && heroPhoto && heroDesc) {
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
  }
})
