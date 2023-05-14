import { NextResponse } from "next/server"
import Replicate from "replicate"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN ?? "",
})

export async function POST(request: Request) {
  const { photo } = await request.json()
  console.log(photo)

  const output = await replicate.run(
    "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608",
    {
      input: {
        image: photo.image,
        caption: true,
      },
    }
  )

  console.log(output)

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You are Caption writer who can craft beautiful captions for photos. You are given a description of a photo and the current caption of the photo you have to write a caption for it that are catchy and can be used on social media. Generate 5-6 captions for the given photo and format of the output should each caption on a new line.",
      },
      {
        role: "user",
        content: `image description: ${JSON.stringify(
          output
        )}\ncurrent caption: ${photo.description}`,
      },
    ],
  })

  const { choices } = response.data
  console.log(choices[0].message)

  const captions = choices[0].message?.content
    .split("\n")
    .map((caption) => caption.split(".")[1].replace(/^"|"$/g, ""))

  return NextResponse.json({ captions })
}
