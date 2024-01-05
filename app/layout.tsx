import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT Clone',
  description: 'Developed by Allan Luu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div>
          {/* Sidebar */}

          {/* ClientProvider - Notifications */}

        <div>{children}</div>
        </div>
      </body>

    </html>
  )
}
