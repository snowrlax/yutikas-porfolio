import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Yutika Rege | Machine Learning Engineer',
  description: 'Pioneering AI-driven solutions at the intersection of machine learning and business intelligence. Specializing in LLM applications, computer vision, and intelligent systems that transform complex data challenges into intuitive business solutions.',
  keywords: 'Machine Learning Engineer, AI Solutions, LLM Applications, Computer Vision, NLP, Data Science, Python, PyTorch, TensorFlow, LangChain, LangGraph',
  // openGraph: {
  //   title: 'Yutika Rege | Machine Learning Engineer',
  //   description: 'Pioneering AI-driven solutions at the intersection of machine learning and business intelligence.',
  //   images: [{ url: '/profile-image.jpg', width: 1200, height: 630 }],
  //   type: 'website',
  // },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
