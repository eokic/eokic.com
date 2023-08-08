import type { IClient, IEntity, ISEO, IStrapiMedia } from '.'

export default interface IProject extends IEntity {
  url: string
  title: string
  client: IClient
  subtitle: string
  thumbnail: IStrapiMedia
  dateStart: string
  dateEnd?: string
  ongoing?: boolean
  sequence: number
  seo: ISEO
}
