import "./globals.css"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InstaMagic | AI-powered Instagram caption generator",
  description:
    "AI-powered Instagram caption generator for creating unique and engaging captions in seconds. Boost your reach, engagement, and revenue with captions that stand out.",
  keywords: [
    "Instagram caption generator",
    "Instagram caption writing tool",
    "Instagram caption maker",
    "Instagram caption ideas",
    "Instagram caption tips",
    "Instagram caption examples",
    "Instagram caption templates",
    "Instagram caption tools",
    "Instagram caption software",
    "Instagram caption apps",
    "Instagram caption generator for businesses",
    "Instagram caption generator for influencers",
    "Instagram caption generator for creatives",
    "Instagram caption generator for brands",
    "Instagram caption generator for artists",
    "Instagram caption generator for photographers",
    "Instagram caption generator for writers",
    "Instagram caption generator for poets",
    "Instagram caption generator for comedians",
    "Instagram caption generator for musicians",
    "Instagram caption generator for actors",
    "Instagram caption generator for models",
    "Instagram caption generator for bakers",
    "Instagram caption generator for party-planners",
    "Instagram caption for anyone who wants to create engaging and creative captions for their Instagram posts",
  ],
  openGraph: {
    title: "InstaMagic | AI-powered Instagram caption generator",
    url: "https://www.instamagic.xyz",
    type: "website",
    description:
      "Create captivating Instagram captions in seconds with our AI-powered tool. Enhance your reach, engagement, and monetization with personalized and unique captions tailored for your audience.",
    siteName: "InstaMagic.xyz",
    images: [
      {
        url: "https://www.instamagic.xyz/instamagic-app.png",
        width: 1000,
        height: 600,
      },
    ],
    locale: "en_US",
  },
  _foundr: "e2e301b75b856898215ffd42b7da03bd",
  twitter: {
    card: "summary_large_image",
    title: "InstaMagic | AI-powered Instagram caption generator",
    description:
      "Create captivating Instagram captions in seconds with our AI-powered tool. Enhance your reach, engagement, and monetization with personalized and unique captions tailored for your audience.",
    site: "@satria_tech",
    creator: "@satria_tech",
    image: "https://www.instamagic.xyz/instamagic-app.png",
  },
}

const navigation = [
  {
    name: "Twitter",
    href: "https://twitter.com/InsyteApp",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white">
          {children}{" "}
          <footer>
            <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
              <div className="flex justify-center space-x-6 md:order-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="flex items-center space-x-2 text-gray-800 hover:text-gray-900"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-xs leading-5 text-center text-gray-800">
                  &copy; 2023 InstaMagic AI, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
