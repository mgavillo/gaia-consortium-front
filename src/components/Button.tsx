export default function Button({ text, type = "button" }: { text: string; type?: "button" | "submit" | "reset" }) {
  return (
    <button className=" rounded-sm bg-skyBlue px-6 py-3" type={type}>
      {text}
    </button>
  );
}
