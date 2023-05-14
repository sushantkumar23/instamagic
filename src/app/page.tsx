"use client" // this is a client component 👈🏽

import Image from "next/image"
import { useState } from "react"
import { Tab } from "@headlessui/react"

import type { Profile, Post } from "@/types"

const sampleProfile: Profile = {
  handle: "akritigupta92",
  posts: [
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
  "Beach beauty and ladder lounging in the sands of Fiji 🏝️😎",
  "Bikini babe meets rustic charm 🩱🪜",
  "Sun-kissed and ladder chic 🌞💁‍♀️",
  "Climbing the ladder of summer style 🌊🌴",
  "Elevated beach vibes on wooden rungs 🏖️✨",
  "Taking a step up in beach fashion ⛱️🔥",
]

const testimonials = [
  [
    [
      {
        body: "InstaMagic has taken my Instagram game to a whole new level. My engagement has doubled since I started using this incredible app!",
        author: {
          name: "Zach (25.6M followers)",
          handle: "zachking",
          imageUrl: "/images/zachking.jpeg",
        },
      },
      {
        body: "InstaMagic is my secret weapon for maintaining a consistent and engaging online presence. My followers love the captions, and I love the time it saves me!",
        author: {
          name: "Purabi (3.2M followers)",
          handle: "purabibhargava_13",
          imageUrl: "/images/purabibhargava_13.jpeg",
        },
      },
    ],
    [
      {
        body: "I love how quickly InstaMagic generates amazing captions for my photos. It saves me so much time, allowing me to focus on creating great content.",
        author: {
          name: "Bhavin (4.9M followers)",
          handle: "bhavin_333",
          imageUrl: "/images/bhavin_333.jpeg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "The captions generated by InstaMagic are so creative and unique! It's like having a personal copywriter for my social media posts.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "I used to spend hours thinking of the perfect caption, but now I have InstaMagic! The AI-generated captions are always spot-on and save me so much time and energy.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "I'm blown away by the creativity and relevance of the captions InstaMagic provides. It's like they know exactly what I want to say!",
        author: {
          name: "Leonard (5.6M followers)",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
]

const featuredTestimonial = {
  body: " ✨ InstaMagic has helped me grow my Instagram account exponentially. The captions always feel personal and authentic, which keeps my audience engaged and coming back for more!",
  author: {
    name: "Chiara Ferragni (28.4M followers)",
    handle: "chiaraferragni",
    imageUrl: "/images/chiaraferragni.jpeg",
  },
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Home() {
  const [profile, setProfile] = useState<Profile>()
  const [handle, setHandle] = useState("")
  const [captions, setCaptions] = useState<string[]>([])

  const handleClick = async () => {
    const res = await fetch(`/api/handles`, {
      method: "POST",
      body: JSON.stringify({ handle }),
    })
    const data: Profile = await res.json()
    setProfile(data)
  }

  const generateCaption = async (photo: Post) => {
    const res = await fetch(`/api/captions`, {
      method: "POST",
      body: JSON.stringify({ photo }),
    })
    const data = await res.json()
    setCaptions(data.captions)
  }

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">InstaMagic</span>
              <h2 className="text-2xl font-bold text-gray-800">
                ✨ InstaMagic
              </h2>
            </a>
          </div>
          {/* <div className="lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>
      </header>

      <div className="relative px-4 overflow-hidden isolate pt-14">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-500 to-[#5049b8] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-4xl py-32 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900/80 sm:text-6xl">
              AI-Generated Captions for engagement and growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Unleash your Instagram&apos;s full potential with captivating
              AI-powered captions, designed to skyrocket your likes and
              followers in no time!
            </p>
          </div>
          {!profile && (
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mt-4 gap-x-6">
                <div className="flex w-full gap-4">
                  <input
                    name="handle"
                    id="handle"
                    placeholder="Enter your Instagram handle"
                    className="flex-auto block px-4 py-4 text-lg text-gray-900 border-0 rounded-lg shadow-sm sm:text-xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                    onChange={(e) => setHandle(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        handleClick()
                      }
                    }}
                    value={handle}
                  />
                  <button
                    onClick={handleClick}
                    className="flex-none px-4 py-3 text-lg font-semibold text-center text-gray-100 bg-indigo-600 rounded-md shadow-xl sm:px-6 sm:py-4 sm:text-xl hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
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
        </div>
        {/* Photo Collage */}
        {profile && (
          <div className="px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 sm:py-10 lg:px-8">
            <div className="max-w-2xl mx-auto mb-16 lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                @{profile.handle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Your posts are amazing. Just like you! 🙌
              </p>
            </div>
            <Tab.Group as="div" className="flex flex-col max-w-6xl mx-auto">
              <Tab.Panels className="w-full aspect-h-1 aspect-w-1">
                {profile.posts.map((post, index) => (
                  <Tab.Panel key={index}>
                    <div className="flex flex-col w-full gap-12 mx-auto mt-8 md:flex-row">
                      <div className="md:w-1/2">
                        <Image
                          height={400}
                          width={400}
                          src={post.image}
                          alt={post.description}
                          className="object-contain w-full rounded-lg"
                        />
                      </div>
                      <div className="md:w-1/2">
                        <div className="flex flex-col justify-between">
                          <h2 className="text-lg font-bold text-gray-900">
                            {post.description}
                          </h2>
                        </div>
                        {captions.length > 0 && (
                          <div>
                            <p className="mt-8 mb-4 font-semibold text-gray-700">
                              AI-generated captions
                            </p>
                            <ul role="list" className="space-y-4">
                              {captions.map((caption, index) => (
                                <li
                                  key={index}
                                  className="bg-white divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-gray-900/10"
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
                            onClick={() => generateCaption(post)}
                            className="flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Generate Captions
                          </button>
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
              {/* Image selector */}
              <div className="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
                <div className="mt-12 mb-8">
                  <h3 className="text-lg font-bold text-gray-800">
                    Recent posts
                  </h3>
                  <p className="text-sm text-gray-600">
                    Select a post to create captions
                  </p>
                </div>
                <Tab.List className="grid grid-cols-10 gap-6">
                  {profile.posts.map((post, index) => (
                    <Tab
                      key={index}
                      className="relative flex items-center justify-center text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only">{post.slug}</span>
                          <span className="inset-0 overflow-hidden rounded-md ">
                            <Image
                              height={200}
                              width={200}
                              src={post.image}
                              alt={post.description}
                              className="object-contain object-center w-full h-full"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-indigo-500" : "ring-transparent",
                              "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </Tab.Group>
          </div>
        )}
      </div>
      {/* Testimonials section */}
      <div className="relative isolate sm:pt-32">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div className="relative">
          <div
            className="absolute inset-x-0 overflow-hidden -translate-y-1/2 top-1/2 -z-10 transform-gpu opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 flex pt-8 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl xl:justify-end"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-xl mx-auto sm:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Influencers&apos; Secret Weapon
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover the InstaMagic advantage
              </p>
            </div>
            <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="hidden col-span-2 sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex items-center px-6 py-4 border-t gap-x-4 border-gray-900/10">
                  <img
                    className="flex-none w-10 h-10 rounded-full bg-gray-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className="space-y-8 xl:contents xl:space-y-0"
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? "xl:row-span-2"
                          : "xl:row-start-1",
                        "space-y-8"
                      )}
                    >
                      {column.map((testimonial) => (
                        <figure
                          key={testimonial.author.handle}
                          className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5"
                        >
                          <blockquote className="text-gray-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="flex items-center mt-6 gap-x-4">
                            <img
                              className="w-10 h-10 rounded-full bg-gray-50"
                              src={testimonial.author.imageUrl}
                              alt=""
                            />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unlock the power of captivating captions today.
            </h2>
            <p className="mx-auto mt-6 text-lg leading-8 text-gray-600 ">
              Why settle for mediocre captions when you can join the ranks of
              successful Instagram influencers? Try <b>InstaMagic</b> today and
              get ready to watch your engagement and followers soar!
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
