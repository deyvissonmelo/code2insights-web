import { Copyright, Send } from "lucide-react";
import Button from "../button";
import Input from "../input";
import Logo from "./logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-gray-200">
      <div id="footerContent" className="px-4 py-8">
        <Logo />
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div id="footerNewsletter" className="my-10">
            <form className="flex max-w-[24rem] flex-col gap-2">
              <p>Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input />
                <Button className="" variant="primary">
                  <Send />
                </Button>
              </div>
            </form>
          </div>

          <div id="footerLinks" className="flex justify-evenly lg:flex-1">
            <div>
              <h3 className="mb-4 text-lg font-medium">Quick links</h3>
              <ul className="space-y-2 px-2 text-base font-light text-gray-400 [&>li:hover]:text-white">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Support</h3>
              <ul className="space-y-2 text-base font-light text-gray-400 [&>li:hover]:text-white">
                <li>
                  <Link href="/">Terms of service</Link>
                </li>
                <li>
                  <Link href="/">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="footerCopyrights"
        className="flex items-center justify-center gap-4 bg-gray-900 px-2 py-2 text-sm font-light text-white"
      >
        <Copyright className="h-4 w-4" />
        <span>Code to insights | 2024 | All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
