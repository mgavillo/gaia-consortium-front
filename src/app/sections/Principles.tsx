import interpretability from "../../../public/interpretability.svg";
import interoperability from "../../../public/interoperability.svg";
import anchoring from "../../../public/Anchoring.svg";
import alignement from "../../../public/Alignement.svg";
import Image from "next/image";

const principles = [
  {
    title: "Interpretability",
    body: "We create intelligible, open systems that empower users to make sense of the world and make well-informed decisions.",
    icon: interoperability,
  },
  {
    title: "Alignment",
    body: "Our systems embed an awareness of planetary boundaries and the deep fabric of interconnectedness that underpins the survival of our species and biosphere.",
    icon: alignement,
  },
  {
    title: "Grounding",
    body: "Our systems are anchored in real-world data and tangible context, ensuring accurate, relevant, and reliable outcomes.",
    icon: anchoring,
  },
  {
    title: "Interoperability",
    body: "Our systems seamlessly collaborate, exchange information and discover each other, achieving exponentially more useful outcomes through shared protocols.",
    icon: interpretability,
  },
];

function Principle({ element }: { element: { title: string; body: string; icon: any } }) {
  return (
    <div
      className=" w-72 h-80 flex flex-col gap-4 p-6 rounded-lg transition-all hover:from-skyBlue/30 hover:to-darkBlue/30 bg-slate-800 border border-gray-800 bg-opacity-30"
      style={{
        // border: "1px solid",
        borderRadius: "6px",
        // borderImageSource: "radial-gradient(65.31% 389.53% at 56.2% 65.31%, #04E1FF 0%, #1B85E7 46.35%, #2026A2 100%)",
        // borderImageSlice: "1",
      }}>
      <Image src={element.icon} alt="icon" />
      <h3>{element.title}</h3>
      <p>{element.body}</p>
    </div>
  );
}

export default function Principles() {
  return (
    <section id="Principles" className="">
      <h2>Core principles</h2>
      <div className="flex flex-row gap-8 flex-wrap items-center justify-center">
        {principles.map((e, i) => (
          <Principle key={i} element={e} />
        ))}
      </div>
    </section>
  );
}
