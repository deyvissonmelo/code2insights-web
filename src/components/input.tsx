import { InputHTMLAttributes } from "react";
import { VariantProps, tv } from "tailwind-variants";

const input = tv({
  base: [
    "w-full px-2 border-0 p-0 text-zinc-900 placeholder-zinc-600 outline-none",
  ],
  variants: {
    variant: {
      primary:
        "focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
      outline:
        "border-b-[1px] border-b-gray-300 focus-visible:outline-none focus-visible:border-b-orange-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

const Input = ({ variant, className, ...props }: InputProps) => {
  return <input {...props} className={input({ variant, className })} />;
};

export default Input;
