import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/../public/images/lightbulb.svg'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-between gap-1">
      <div className="h-8 w-8">
        <Image src={logoImg} alt="Dev2Insight logo" />
      </div>
      <span className="sr-only font-in text-lg sm:not-sr-only">
        Code to Insights
      </span>
    </Link>
  )
}

export default Logo
