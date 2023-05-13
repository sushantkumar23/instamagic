"use client" // this is a client component 👈🏽

import Image from "next/image"
import { useState } from "react"

type Photo = {
  slug: string
  image: string
  description: string
  takenAt: string
  pinned: boolean
}

type Profile = {
  handle: string
  photos: Photo[]
}

const sampleProfile: Profile = {
  handle: "akritigupta92",
  photos: [
    {
      slug: "Cr6uyMpS2bx",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Cr6uyMpS2bx.jpeg",
      description:
        "Same time, different days - Experiencing a unique moment in time at the International Date Line where yesterday meets today 💫",
      takenAt: "2023-05-06T22:00:11.000Z",
      pinned: false,
    },
    {
      slug: "Cr6s_kESZDO",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Cr6s_kESZDO.jpeg",
      description:
        "The perfect escape: chasing waterfalls in Taveuni island 🏝️",
      takenAt: "2023-05-06T21:44:31.000Z",
      pinned: false,
    },
    {
      slug: "Cr6sTmuyNZO",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Cr6sTmuyNZO.jpeg",
      description: "Finding our bliss in Fiji’s green island embrace 🌴",
      takenAt: "2023-05-06T21:38:31.000Z",
      pinned: false,
    },
    {
      slug: "CruhCnvouYG",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/CruhCnvouYG.jpeg",
      description: "Where paradise meets poise 🖼️",
      takenAt: "2023-05-02T04:09:12.000Z",
      pinned: false,
    },
    {
      slug: "Crue_UMvGQA",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Crue_UMvGQA.jpeg",
      description: "A tropical symphony of colors, sand, and seascapes 🌊 🌤️",
      takenAt: "2023-05-02T03:51:16.000Z",
      pinned: false,
    },
    {
      slug: "CrudJQFvSfw",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/CrudJQFvSfw.jpeg",
      description: "Sun-kissed on the beach 🏝️ #tanlinesandgoodtimes",
      takenAt: "2023-05-02T03:35:09.000Z",
      pinned: false,
    },
    {
      slug: "CrprSmhPZuh",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/CrprSmhPZuh.jpeg",
      description:
        "Ziplined together into the hearts of the Cannibal Caves of Fiji! 🔥",
      takenAt: "2023-04-30T07:02:34.000Z",
      pinned: false,
    },
    {
      slug: "Crmi_Ejv28Z",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Crmi_Ejv28Z.jpeg",
      description: "Beating the Sun with Fijian tropical drink🍹",
      takenAt: "2023-04-29T01:52:16.000Z",
      pinned: false,
    },
    {
      slug: "CrmhRaOv1pz",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/CrmhRaOv1pz.jpeg",
      description: "Mud pool on a warm sunny day 🌤️",
      takenAt: "2023-04-29T01:37:18.000Z",
      pinned: false,
    },
    {
      slug: "Crmgxv5IxyK",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Crmgxv5IxyK.jpeg",
      description: "Strolling through Fijian Orchids 🌷",
      takenAt: "2023-04-29T01:32:58.000Z",
      pinned: false,
    },
    {
      slug: "Crbr-pnIELG",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/Crbr-pnIELG.jpeg",
      description: "Wedding in Surat 🎊",
      takenAt: "2023-04-24T20:39:12.000Z",
      pinned: false,
    },
    {
      slug: "CrbrNgYoDnu",
      image:
        "https://d2b8b46ja6xujp.cloudfront.net/akritigupta92/CrbrNgYoDnu.jpeg",
      description: "Congratulations to both of you @shubhamgoswami14 🎉",
      takenAt: "2023-04-24T20:32:30.000Z",
      pinned: false,
    },
  ],
}

const sampleCaptions = [
  "Beach beauty and ladder lounging 🏝️😎",
  "Bikini babe meets rustic charm 🩱🪜",
  "Sun-kissed and ladder chic 🌞💁‍♀️",
  "Climbing the ladder of summer style 🌊🌴",
  "Elevated beach vibes on wooden rungs 🏖️✨",
  "Taking a step up in beach fashion ⛱️🔥",
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profile, setProfile] = useState<Profile>(sampleProfile)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [handle, setHandle] = useState("")
  const [captions, setCaptions] = useState<string[]>(sampleCaptions)

  const handleClick = async () => {
    console.log("clicked")

    const res = await fetch(`https://instagram-api.scribo.dev/api/${handle}`)
    const data: Photo[] = await res.json()
    setProfile({
      handle,
      photos: data,
    })
  }

  const generateCaption = async (photo: Photo) => {
    const res = await fetch(`/api/captions`, {
      method: "POST",
      body: JSON.stringify({ photo }),
    })
    const data = await res.json()
    setCaptions(data.captions)
  }

  return (
    <div className="bg-gray-100">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className="text-2xl font-bold text-gray-900/80">
                InstaMagic
              </h2>
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden isolate pt-14">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-4xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Boost Your Insta Game with AI-Generated Captions!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Unleash your Instagram&apos;s full potential with captivating
              AI-powered captions, designed to skyrocket your likes and
              followers in no time!
            </p>
          </div>
          {profile === ({} as Profile) && (
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mt-4 gap-x-6">
                <div className="w-full">
                  <input
                    name="handle"
                    id="handle"
                    placeholder="Enter your Instagram handle"
                    className="block w-full px-4 py-4 text-lg text-gray-900 border-0 rounded-lg shadow-sm sm:text-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => setHandle(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        handleClick()
                      }
                    }}
                    value={handle}
                    // disabled={processing}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleClick}
                  // disabled={processing}
                  className="w-full px-4 py-3 text-lg font-semibold text-center rounded-md shadow-xl bg-indigo-300/90 sm:px-6 sm:py-4 sm:text-xl text-gray-900/80 hover:text-gray-900/90 hover:bg-indigo-400/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Photo Collage */}
        {profile !== ({} as Profile) && (
          <div className="px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-10 lg:px-8">
            <div className="max-w-2xl mx-auto mb-16 lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                @{profile.handle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Your posts are amazing. Just like you! 🙌
              </p>
            </div>
            {selectedPhoto === null ? (
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {profile.photos.map((photo, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(photo)}
                    className="text-sm group"
                  >
                    <div className="w-full overflow-hidden bg-gray-100 rounded-lg cursor-pointer aspect-h-1 aspect-w-1 group-hover:opacity-75">
                      <img
                        src={photo.image}
                        alt={photo.description}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-100">
                      {photo.description}
                    </h3>
                    {/* <p className="italic text-gray-500">{photo.availability}</p>
                <p className="mt-2 font-medium text-gray-900">{photo.price}</p> */}
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl px-4 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex flex-col justify-between">
                      <h1 className="text-xl font-bold text-gray-900">
                        {selectedPhoto.description}
                      </h1>
                    </div>
                    {/* Reviews */}
                    <div className="mt-4">
                      <h2 className="sr-only">Reviews</h2>
                    </div>
                    {captions.length > 0 && (
                      <div>
                        <p className="mt-8 mb-4 font-semibold text-gray-700">
                          AI-generated captions
                        </p>
                        <ul role="list" className="grid gap-6">
                          {captions.map((caption, index) => (
                            <li
                              key={index}
                              className="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
                            >
                              <div className="flex items-center justify-between w-full p-6 space-x-6">
                                <div className="flex-1 truncate">
                                  <div className="flex items-center space-x-3">
                                    <h3 className="font-medium text-gray-800 truncate ">
                                      {caption}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8 lg:col-span-5">
                      <button
                        onClick={() => generateCaption(selectedPhoto)}
                        className="flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Generate Caption
                      </button>
                    </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                      <img
                        src={selectedPhoto.image}
                        alt={selectedPhoto.description}
                        className="rounded-lg lg:col-span-2 lg:row-span-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
