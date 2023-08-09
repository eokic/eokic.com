import type { NStrapiMedia } from './_StrapiMedia'
import type { IEntity, IEmailTemplate } from '.'

export default interface IService extends IEntity {
  title: string
  subtitle: string
  callToAction: string
  thumbnail: NStrapiMedia.Vector
  thumbOffsetTop: number
  email: IEmailTemplate
}
