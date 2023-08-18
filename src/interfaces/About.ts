import type { NStrapiMedia } from './_StrapiMedia'
import type { IEntity } from '.'

export default interface IAbout extends IEntity {
  heroMediaLeft: NStrapiMedia.Raster
  heroMediaCenter: NStrapiMedia.Raster
  heroMediaRight: NStrapiMedia.Raster
  heroMediaSupplement: NStrapiMedia.Raster
  body: string
}
