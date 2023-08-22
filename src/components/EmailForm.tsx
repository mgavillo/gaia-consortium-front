"use client";
import { useState } from "react";
import Button from "./Button";

export default function EmailForm({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  const [email, setEmail] = useState("");

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };


  return (
    <form
      className={`flex ${orientation == "horizontal" ? "flex-row" : "flex-col"} gap-4 w-full`}
      // onSubmit={(e) => handleSubmit(e)}
      >
      <input
        type="email"
        id="email"
        name="email"
        className="px-6 py-3 rounded-sm bg-slate-900 w-full invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
        placeholder="Your email"
        onChange={(e) => handleChange(e)}
        required
        // pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
        ></input>
      <Button text="Subscribe" type="submit" />
    </form>
  );
}
