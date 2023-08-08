import type IEntity from './_Entity'
import type ILogo from './_Logo'

export default interface IClient extends IEntity {
  title: string
  legalName?: string
  importance: number
  brandColor: string // hex
  logo: ILogo
}
