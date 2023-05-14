export type Post = {
  slug: string
  image: string
  description: string
  takenAt: string
  pinned: boolean
  handle?: string
}

export type Profile = {
  handle: string
  posts: Post[]
}
