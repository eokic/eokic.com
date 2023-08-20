import type { IEntity, ILogo, ISEO } from '.'

export default interface IHome extends IEntity {
  logo: ILogo
  footer?: string
  seo: ISEO
}
