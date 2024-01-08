import { SendIcon } from "lucide-react";
import Button from "./button";
import Input from "./input";
import { HTMLAttributes } from "react";

interface NewsletterProps extends HTMLAttributes<HTMLDivElement> {}

const Newsletter = (props: NewsletterProps) => {
  return (
    <div className={`bg-slate-800 text-gray-200 ${props.className}`}>
      <form className="flex flex-col items-center justify-center px-5 py-5">
        <SendIcon className="mb-4 h-14 w-14 text-gray-200" />
        <h2 className="mb-2 text-2xl">Stay up to date</h2>
        <p className="mb-4 text-center text-base">
          Subscribe in my newsletter to always be aware when a new post arrived.
        </p>
        <Input className="mb-4 h-12 md:w-[80%] lg:w-full" />
        <Button className="mb-4 h-12 w-full md:w-[80%] lg:w-full">Subscribe</Button>
      </form>
    </div>
  );
};

export default Newsletter;
