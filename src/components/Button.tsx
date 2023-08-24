export default function Button({ text, type = "button" }: { text: string; type?: "button" | "submit" | "reset" }) {
  return (
    <button className=" rounded-sm bg-darkBlue px-6 py-3 hover:bg-opacity-90 transition-all" type={type}>
      {text}
    </button>
  );
}
