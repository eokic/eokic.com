/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly STRAPI_URL: string
  readonly STRAPI_API_TOKEN: string
}

declare global {
  var state: object // eslint-disable-line
}

export {}
