import type { IClient, IEntity, ISEO, IStrapiMedia } from '.'

export default interface IProject extends IEntity {
  client: IClient
  title: string
  subtitle: string
  thumbnail: IStrapiMedia
  dateStart: string
  dateEnd?: string
  ongoing?: boolean
  sequence: number
  seo?: ISEO
}
