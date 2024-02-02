"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import { Send, X } from "lucide-react";

export default async function Contact() {
  return (
    <main>
      <div className="py-app-nav-bar sm:mx-4">
        <div className="bg-white my-8 py-8 px-4 mx-auto max-w-[800px] md:px-12 md:py-12">
          <h2 className="text-[24px] mb-2 font-black leading-8">
            Get in touch
          </h2>
          <p className="mb-4 text-md text-gray-500">Don't be shy, ask me a question.</p>
          <form className="flex w-full flex-col gap-2">
            <Input placeholder="Name" variant="outline" className="mb-4 h-12" />
            <Input
              placeholder="E-mail"
              variant="outline"
              className="mb-4 h-12"
            />
            <TextArea
              multiple
              variant="outline"
              placeholder="Message"
              className="mb-4 h-40"
            />
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-evenly">
              <Button className="h-14 w-full">
                <Send />
                <label>Send</label>
              </Button>
              <Button
                type="reset"
                className="h-14 w-full"
                variant="outline"
                onClick={() => {}}
              >
                <X />
                <label>Cancel</label>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
