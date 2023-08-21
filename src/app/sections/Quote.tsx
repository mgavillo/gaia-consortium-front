export default function Quote() {
  return (
    <section className="py-24 flex flex-col gap-16">
      {/* <span className=" -mb-12 ">
        <BiSolidQuoteAltRight
          size={100}
          className={"bg-gradient-to-tr from-lightBlue to-darkBlue text-transparent bg-clip-text"}
        />
      </span> */}
      <p className="w-full font-black text-2xl lg:text-6xl text-center">
        We might find ways to ground human decision-making in the basic evolutionary unfolding of the world.
      </p>
      {/* <p className=" w-full font-bold text-8xl">
        Rather than projecting
        <span className="font-black text-8xl stroke-red font-outline-2 text-black">
          {" "}
          what people want onto the world
        </span>
        <span className=" italic">(the basic premise of democracy)</span>, we might look for ways to listen in to
      </p> */}
      <div className="flex flex-col text-base xl:text-4xl font-medium gap-4">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-1 lg:gap-4 ">
          <p className="w-[700px] text-center xl:text-right text-slate-600 italic font-serif">Rather than projecting</p>
          <p className="w-[700px] text-center xl:text-left text-2xl lg:text-4xl font-black"> what people want onto the world</p>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-1 lg:gap-4 ">
          <p className="w-[700px] text-center xl:text-right text-slate-600 italic font-serif">We might look for ways to listen in to</p>
          <p className=" w-[700px] text-center xl:text-left text-2xl lg:text-4xl font-black "> what the world is calling for.</p>
        </div>
      </div>
    </section>
  );
}
