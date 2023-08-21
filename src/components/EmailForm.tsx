import Button from "./Button";

export default function EmailForm({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
  return (
    <form className={`flex ${orientation == "horizontal" ? "flex-row" : "flex-col"} gap-4 w-full`}>
      <input className="px-6 py-3 rounded-sm bg-slate-900 w-full" placeholder="Your email"></input>
      <Button text="Subscribe" />
    </form>
  );
}
