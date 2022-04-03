export default function Cube({ className }: { className: string }) {
  return (
    <div className="absolute w-full h-full grid items-center justify-center   ">
      <div className="  ">
        <div
          className={` max-w-[70vw] max-h-[70vw] border-day-blue border  ${className}`}
        ></div>
      </div>
    </div>
  );
}
