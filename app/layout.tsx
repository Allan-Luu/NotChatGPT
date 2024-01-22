import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBar from '@/components/SideBar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { SessionProvider } from '../components/SessionProvider'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AllanGPT',
  description: 'Developed by Allan Luu',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  //console.log(session);
  return (
    <html lang="en">
      <head>
      <body>
        <SessionProvider session={session}>
        {!session ? (
          <Login/>
        ) : (
          <div className="flex">
          <div className='bg-[#202123] max-w-xs h-screen 
          overflow-y-auto md:min-w-[20rem]'>
          <SideBar />
          </div>
          
          {/* ClientProvider - Notifications */}
          <ClientProvider />

          <div className ="bg-[#343541] flex-1">{children}</div>
          </div>
        )}
        </SessionProvider>
      </body>
      </head>
    </html>
  )
}
