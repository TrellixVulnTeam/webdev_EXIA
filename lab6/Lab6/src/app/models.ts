export interface Album {
  id: number,
  title: string
}
export interface Photos{
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
