import { InputHTMLAttributes } from "react";
import { VariantProps, tv } from "tailwind-variants";

const textarea = tv({
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

interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {}

const TextArea = ({ variant, className, ...props }: TextAreaProps) => {
  return <textarea {...props} className={textarea({ variant, className })} />;
};

export default TextArea;
