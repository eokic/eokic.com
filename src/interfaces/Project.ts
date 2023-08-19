import type { IClient, IEntity, IListItem, ISEO, NStrapiMedia } from '.'

export default interface IProject extends IEntity {
  url: string
  title: string
  client: IClient
  subtitle: string
  thumbnail: NStrapiMedia.Raster
  dateStart: string
  dateEnd?: string
  ongoing?: boolean
  sequence: number
  features: IListItem[]
  seo: ISEO
}
