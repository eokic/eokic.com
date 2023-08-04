import type IEntity from './_Entity'
import type ILink from './_Link'

export default interface ITestimonial extends IEntity {
  person: string
  position: string
  quote: string
  size: 'auto' | 'small' | 'medium' | 'large'
  link?: ILink
}
