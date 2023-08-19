import type { IEntity, IEmailTemplate, NStrapiMedia } from '.'

export default interface IService extends IEntity {
  title: string
  subtitle: string
  callToAction: string
  thumbnail: NStrapiMedia.Vector
  thumbOffsetTop: number
  email: IEmailTemplate
}
