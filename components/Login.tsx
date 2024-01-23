'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"


function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col 
    items-center justify-center text-center">
        <Image
         src="https://media.licdn.com/dms/image/D4E12AQHzPd-IYus9dw/article-cover_image-shrink_720_1280/0/1699361934696?e=1710374400&v=beta&t=J4rLw5ghGrPg_sZfa0PvkeJ1hR9lw-S8dpVU62Eh51s"
         width={300}
         height={300}
         alt="logo"
        />
        <button onClick={() => signIn('google')} 
        className="text-white font-bold text-3xl animate-pulse">
            Sign In to use AllanGPT
        </button>
    </div>
  )
}

export default Login