export default function Quote() {
  return (
    <section className="py-24 flex flex-col gap-4">
      {/* <span className=" -mb-12 ">
        <BiSolidQuoteAltRight
          size={100}
          className={"bg-gradient-to-tr from-lightBlue to-darkBlue text-transparent bg-clip-text"}
        />
      </span> */}
      <p className="w-full font-black text-6xl text-center">
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
      <div className="flex flex-col text-4xl">
        <div className="flex flex-row items-center gap-4 font-black">
          <p className="w-[700px] text-right  text-neutral-600">Rather than projecting</p>
          <p className="w-[700px] font-black stroke-red"> what people want onto the world</p>
        </div>
        <div className="flex flex-row items-center gap-4 text-4xl font-black">
          <p className="w-[700px]  text-right text-neutral-600">We might look for ways to listen in to</p>
          <p className=" w-[700px] font-black  "> what the world is calling for.</p>
        </div>
      </div>
    </section>
  );
}
