"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textarea";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { MessageSquareMore, Send, X } from "lucide-react";
import { useState } from "react";

const PostFormResponse = () => {
  const [parent] = useAutoAnimate();

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-auto mt-8 w-full max-w-[800px] bg-white px-4 md:px-8">
      <Collapsible.Root open={showForm}>
        <Collapsible.Trigger asChild>
          <Button
            className="my-8 h-14 w-full"
            variant="primary"
            disabled={showForm}
            onClick={() => setShowForm(true)}
          >
            <MessageSquareMore />
            <span>Add response</span>
          </Button>
        </Collapsible.Trigger>

        <Collapsible.Content ref={parent}>
          <form className="w-full flex flex-col gap-2">
            <Input
              placeholder="Name"
              variant="outline"
              className="mb-4 h-12"
            />
            <Input
              placeholder="E-mail"
              variant="outline"
              className="mb-4 h-12"
            />
            <TextArea
              multiple
              variant="outline"
              placeholder="Response"
              className="mb-4 h-40"
            />
            <div className="flex w-full flex-col gap-4">
              <Button className="h-14 w-full">
                <Send />
                <label>Send</label>
              </Button>
              <Button
                type="reset"
                className="h-14 w-full"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                <X />
                <label>Cancel</label>
              </Button>
            </div>
          </form>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default PostFormResponse;
