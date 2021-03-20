import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import Link from 'next/link'

function Avatar() {
  return (
    <div className="flex justify-center">
      <Image src="/me.jpg" alt="Daniel Roberts" className="rounded-full h-208 w-208" height="208" width="208"/>
    </div>
  )
}

function Divider() {
  return <hr class="border-0 bg-gray-500 text-gray-500 w-px h-6 m-0 mx-4"/ >
}

function Menu() {
  return (
    <>
      <div className="flex justify-center my-6">
        <Link href="/"><a>About</a></Link>
        <Divider />
        <Link href="/coaching"><a>Coaching</a></Link>
        <Divider />
        <Link href="/workshops"><a>Workshops</a></Link>
        <Divider />
        <Link href="/summer-camp"><a>Summer Camp</a></Link>
      </div>
    </>
  )
}

export default function Layout({children}) {
  return (
    <div className="container mx-auto">
      <div className="p-6 text-center">Web Development for Beginners</div>
      <Avatar/>
      <Menu/>
      {children}
    </div>
  )
}
