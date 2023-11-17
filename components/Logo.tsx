import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <div className="md:flex items-center gap-x-2 hidden hover:opacity-75">
        <Image src='/logo.svg' alt="logo" height={30} width={30}/>
        <p className="text-lg text-neutral-700 pb-1">Taskify</p>
      </div>
    </Link>
  )
}
