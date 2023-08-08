import type { NStrapiMedia } from './_StrapiMedia'

export default interface ILogo {
  colorOnLight: NStrapiMedia.Vector
  colorOnDark?: NStrapiMedia.Vector
  monoOnLight?: NStrapiMedia.Vector
  monoOnDark?: NStrapiMedia.Vector
  vAlign?: number
}
