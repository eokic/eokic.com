import type IEntity from './_Entity'

export namespace NStrapiMedia {

  export interface Base {
    name: string
    hash: string
    ext: string
    mime: string
    width: number
    height: number
    size: number
    path: null
    url: string
  }

  export interface Vector extends IEntity, Base {
    alternativeText?: string
    caption?: string
    previewUrl?: string
    provider: string
    provider_metadata?: unknown
  }

  export interface Raster extends Vector {
    formats?: {
      thumbnail: Base
      24: Base
      128: Base
      360: Base
      524: Base
      720: Base
      960: Base
      1280: Base
      1640: Base
      1920: Base
    }
  }

  export type Unknown = Vector | Raster

}
