import { SimpleSeparator } from "./Separator";
import { BsTwitter, BsYoutube } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-row gap-4">
        <BsTwitter size={30} />
        <BsYoutube size={30} />
      </div>
      <SimpleSeparator />
      <h2>Gaia Consortium</h2>
    </footer>
  );
}
