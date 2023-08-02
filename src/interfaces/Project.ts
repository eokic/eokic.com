import type IEntity from './_Entity'
import type ISEO from './_SEO'

export default interface IProject extends IEntity {
  title: string
  subtitle: string
  thumbnail: string
  dateStart: string
  dateEnd?: string
  ongoing?: boolean
  sequence: number
  seo?: ISEO
}
