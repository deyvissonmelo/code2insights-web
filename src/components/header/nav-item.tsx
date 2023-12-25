import Link from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const navItem = tv({
  slots: {
    container:
      "group relative flex h-10 w-full flex-col items-center justify-center",
    link: "w-full text-center group-hover:text-orange-700",
    marker: "absolute bottom-0.5 bg-orange-700",
  },

  variants: {
    variant: {
      default: {
        marker:
          "group-hover:flex group-hover:flex group-hover:h-[1px] group-hover:w-4/5",
      },
      collapsed: {
        container: "hover:bg-orange-100 border-t-[.5px] border-gray-200",
        marker: "hidden",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface NavItemProps extends VariantProps<typeof navItem> {
  title: string;
  href: string;
}

const NavItem = ({ title, href, variant = "default" }: NavItemProps) => {
  const { container, link, marker } = navItem({ variant });

  return (
    <div className={container()}>
      <Link href={href} className={link()}>
        {title}
      </Link>
      <div className={marker()} />
    </div>
  );
};

export default NavItem;
