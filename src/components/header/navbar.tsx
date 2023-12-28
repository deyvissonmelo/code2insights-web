import { HTMLAttributes } from 'react'
import NavItem from './nav-item'
import { tv, VariantProps } from 'tailwind-variants'

const navbar = tv({
  base: 'flex items-center justify-center font-medium gap-3 bg-gray-50',
  variants: {
    variant: {
      default: '',
      collapsed: 'flex-col gap-0',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

interface NavbarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbar> {
  onItemSelect?: () => void
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav
      className={navbar({ variant: props.variant, className: props.className })}
      onClick={props.onItemSelect}
    >
      <NavItem title="Home" href="/" variant={props.variant} />
      <NavItem title="About" href="/about" variant={props.variant} />
      <NavItem title="Contact" href="/contact" variant={props.variant} />
    </nav>
  )
}

export default Navbar
