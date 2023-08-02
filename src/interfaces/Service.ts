import type { NStrapiMedia } from './_StrapiMedia'
import type IEntity from './_Entity'

export default interface IService extends IEntity {
  title: string
  subtitle: string
  callToAction: string
  thumbnail: NStrapiMedia.Vector
}
