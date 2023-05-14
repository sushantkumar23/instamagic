import { NextResponse } from "next/server"

import clientPromise from "@/lib/mongodb"
import type { Profile, Post } from "@/types"

export async function POST(request: Request) {
  const { handle } = await request.json()

  const res = await fetch(`https://instagram-api.scribo.dev/api/${handle}`)
  const posts: Post[] = await res.json()

  const db = (await clientPromise).db()
  const updatedPosts: Post[] = posts.map((post) => {
    return { ...post, handle: handle }
  })

  const bulkOps = updatedPosts.map((doc) => ({
    updateOne: {
      filter: { image: doc.image },
      update: {
        $setOnInsert: doc,
      },
      upsert: true,
    },
  }))
  await db
    .collection("handles")
    .updateOne(
      { handle: handle },
      { $set: { handle: handle } },
      { upsert: true }
    )
  await db.collection("posts").bulkWrite(bulkOps)
  const profile: Profile = {
    handle: handle,
    posts: updatedPosts,
  }
  return NextResponse.json(profile)
}
