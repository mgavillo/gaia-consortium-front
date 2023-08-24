import { SimpleSeparator } from "./Separator";
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-row gap-4">
        <a href="https://twitter.com/gaiaconsortium" aria-label="Follow us on Twitter" target="_blank">
          <BsTwitter size={30} />
        </a>
        {/* <BsYoutube size={30} /> */}
        <a href="https://www.linkedin.com/company/gaia-consortium/" aria-label="Follow us on Linkedin" target="_blank">
          <BsLinkedin size={30} />
        </a>
      </div>
      <SimpleSeparator />
      <h2>Gaia Consortium</h2>
    </footer>
  );
}
