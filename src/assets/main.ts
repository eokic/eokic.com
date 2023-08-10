import Motus from 'motus'

// Aliasing
const { App } = window

// Avoids weird visual issues by keeping important flags consistent
document.addEventListener('astro:beforeload', () => {
  document.body.classList.remove('no-js')
  document.body.classList.add('js')
})

// On every (Astro) page load...
document.addEventListener('astro:load', () => {
  const SCROLL_OFFSET = 50

  // Get all common/useful elements
  const header = document.getElementById('header')
  const heroDesc = document.getElementById('hero-desc')
  const heroPhoto = document.getElementById('hero-photo')


  /* --------------------------------------------------------------------------
    Smooth scroll any #hash links
  -------------------------------------------------------------------------- */
  document.querySelectorAll('a[data-smooth-scroll][href^="#"]')
    .forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault()
        const href = anchor.getAttribute('href')!
        const targetEl = document.querySelector(href)
        if (!targetEl) return
        const offsetPosition = targetEl.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET

        // Remove focus from the anchor
        anchor.blur()

        // Scroll to the target element
        window.scrollTo({
          top: offsetPosition,
          behavior: App.prefersReducedMotion ? 'instant' : 'smooth',
        })

        // TODO: Focus something for screen readers?

        // Modify the url in case the user wants to copy/paste it
        // However, don't add a new history entry to keep the "back button" clean
        window.history.replaceState(null, '', href)
      })
    })


  /* --------------------------------------------------------------------------
    STICKY HEADER
    Probably just on the homepage for now
  -------------------------------------------------------------------------- */
  if (App.route.isHomePage && header && heroDesc) {
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
  if (!App.prefersReducedMotion && App.route.isHomePage && heroPhoto && heroDesc) {
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
