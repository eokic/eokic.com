import type { IEntity, IProject, ISection, ISEO, IService, NStrapiMedia } from '.'

export default interface IHome extends IEntity {
  title: string
  subtitle: string
  description: string
  heroMedia: NStrapiMedia.Raster
  badge: NStrapiMedia.Raster
  photoLabelMe: string
  photoLabelWaifu: string
  sectionServices: ISection
  services: IService[]
  sectionWork: ISection
  projects: IProject[]
  sectionAbout: ISection
  seo?: ISEO
}
