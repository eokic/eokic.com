import type { IEntity, ILink, NStrapiMedia } from '.'

export default interface ITestimonial extends IEntity {
  person: string
  position: string
  photo: NStrapiMedia.Raster
  quote: string
  size: 'auto' | 'small' | 'medium' | 'large'
  link?: ILink
}
