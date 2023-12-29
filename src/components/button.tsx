import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "disabled:pointer-events-none",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      ghost: "rounded-md px-2 hover:bg-zinc-50 shadow-none",
      primary: "bg-orange-500 text-white hover:bg-orange-700",
      outline:
        "border border-orange-300 text-orange-700 hover:bg-orange-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
}

const Button = ({ asChild, variant, className, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return <Component {...props} className={button({ variant, className })} />;
};

export default Button;
