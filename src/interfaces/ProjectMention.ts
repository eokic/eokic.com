import type { IClient, IEntity } from '.'

export default interface IProject extends IEntity {
  title: string
  client: IClient
  services: string
  dates: string
  sequence: number
}
