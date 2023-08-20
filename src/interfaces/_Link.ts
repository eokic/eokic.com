export default interface ILink {
  url: string
  title?: string
  isPrivate?: boolean // defaults to TRUE
  openInNewTab?: boolean // defaults to null
  icon?: 'github' | 'linkedin' | null
}
