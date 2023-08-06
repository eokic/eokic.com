import Motus from 'motus'

const newAnimation = new Motus.Animation({
  $el: document.getElementById('hero-photo'),
  startPoint: 0,
  endPoint: 800,
  keyframes: [
    { translateY: -100 },
  ],
})
Motus.addAnimation(newAnimation)


const newAnimation2 = new Motus.Animation({
  $el: document.getElementById('hero-desc'),
  startPoint: 0,
  endPoint: 800,
  keyframes: [
    { translateY: 50 },
  ],
})
Motus.addAnimation(newAnimation2)
