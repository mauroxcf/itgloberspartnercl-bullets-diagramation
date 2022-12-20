export type BulletsSchema =  Array<{
  image: string
  titleBullet: string
  link: string
}>

export interface Link {
  url: string
  attributeNofollow: boolean
  attributeTitle?: string
  openNewTab?: boolean
  newTab?: boolean
}