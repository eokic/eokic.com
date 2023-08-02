import type { NStrapiMedia } from './_StrapiMedia'
import type IEntity from './_Entity'
import type ISection from './_Section'
import type IService from './Service'
import type ISEO from './_SEO'

export default interface IHome extends IEntity {
  title: string
  subtitle: string
  description: string
  heroMedia: NStrapiMedia.Raster
  badge: NStrapiMedia.Raster
  photoLabelMe: string
  photoLabelWaifu: string
  sectionServices: ISection
  services: Omit<IService, 'thumbnail'>[]
  sectionWork: ISection
  sectionAbout: ISection
  seo?: ISEO
}
