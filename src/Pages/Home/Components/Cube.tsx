export default function Cube({ className }: { className: string }) {
  return (
    <div className="absolute  left-1/2 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 grid items-center justify-center   ">
      <div className=" xl:pl-32 xl:pt-0 pt-32 ">
        <div
          className={` max-w-[70vw] max-h-[70vw] border-day-blue border  ${className}`}
        ></div>
      </div>
    </div>
  );
}
