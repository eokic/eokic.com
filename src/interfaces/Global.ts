import type { IEntity, ILink, ILogo, ISEO } from '.'

export default interface IHome extends IEntity {
  logo: ILogo
  footer?: string
  footerLinks?: ILink[]
  seo: ISEO
}
