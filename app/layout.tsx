import { Inter, IBM_Plex_Serif } from "next/font/google"

import "./globals.css"
//import { ThemeProvider } from "@/components/theme-provider"
//import { cn } from "@/lib/utils";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
})

export const metadata :Metadata = {
  title: "Horizon",
  description: "Horizon is a mobile banking platform for everyone.",
  icons:{
    icon:'/icons/logo.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}
      >{children}
      </body>
    </html>
  )
}
