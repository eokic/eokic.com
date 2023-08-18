import type IEntity from './_Entity'
import type ILogo from './_Logo'

export default interface IHome extends IEntity {
  siteName: string
  siteDescription?: string
  logo: ILogo
  footer?: string
}
