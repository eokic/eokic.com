import Motus from 'motus'

const newAnimation = new Motus.Animation({
  $el: document.getElementById('hero-photo'),
  startPoint: 0,
  endPoint: 600,
  keyframes: [
    { translateY: -100 },
  ],
})
Motus.addAnimation(newAnimation)


const newAnimation2 = new Motus.Animation({
  $el: document.getElementById('hero-desc'),
  startPoint: 0,
  endPoint: 500,
  keyframes: [
    { translateY: 8 },
  ],
})
Motus.addAnimation(newAnimation2)
