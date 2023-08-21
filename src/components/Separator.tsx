export function SimpleSeparator() {
  return <hr className=" w-full h-[1px] bg-gradient-radial from-lightBlue to-darkBlue border-0" />;
}

export function OrSeparator({ orientation = "vertical" }: { orientation?: "horizontal" | "vertical" }) {
  console.log(orientation);

  const hrStyle = `${orientation == "vertical" ?  "h-[1px] w-1/2" : "w-[1px] h-1/2"} bg-slate-800 border-0`;
  return (
    <div className={`flex ${orientation == "vertical" ? "flex-row" : "flex-col"} h-full items-center gap-4`}>
      <hr className={hrStyle} />
      <p>OR</p>
      <hr className={hrStyle} />
    </div>
  );
}
