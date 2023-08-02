import type IEntity from './_Entity'

export default interface ITestimonial extends IEntity {
  person: string
  position: string
  quote: string
}
