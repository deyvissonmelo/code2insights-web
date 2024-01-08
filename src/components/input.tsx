import { merge } from "@/utils";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={merge([
        "w-full px-2 border-0 p-0 text-zinc-900 placeholder-zinc-600 outline-none",
        "focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
        `${props.className}`,
      ])}
    />
  );
};

export default Input;
