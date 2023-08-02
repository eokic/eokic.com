import type { NStrapiMedia } from './_StrapiMedia'

export interface IMetaSocial {
  socialNetwork: 'Facebook' | 'Twitter'
  title: string
  description: string
  image?: NStrapiMedia.Raster
}

export default interface ISEO {
  metaTitle: string
  metaDescription: string
  metaImage: NStrapiMedia.Raster
  metaSocial?: IMetaSocial[]
  keywords?: string
  metaRobots?: string
  structuredData?: string // JSON
  metaViewport?: string
  canonicalURL?: string
}
