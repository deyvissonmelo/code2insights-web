'use client'

import Logo from './logo'
import * as Collapsible from '@radix-ui/react-collapsible'
import Navbar from './navbar'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Button from '../button'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [parent] = useAutoAnimate()

  const [isOpen, setIsOpen] = useState(false)

  const toogleOpen = () => setIsOpen(!isOpen)

  return (
    <Collapsible.Root
      open={isOpen}
      className="fixed h-app-nav-bar left-0 right-0 z-20 border-b-[.5px] border-gray-300 bg-gray-50"
    >
      <div className="flex w-full items-center justify-between px-5 py-4">
        <Logo />

        <Navbar className="hidden md:flex" />

        <Collapsible.Trigger asChild className="md:hidden">
          <Button variant="ghost" onClick={toogleOpen}>
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content ref={parent}>
        <Navbar variant="collapsed" onItemSelect={toogleOpen} />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default Header
