import cover from "../assets/react.svg";

function HeroFeat() {
  return (
    <div className=" flex-none flex justify-around items-center p-4 bg-custom-gradient w-full text-white ">
      <div className="flex flex-col items-center h-full">
        <div className="w-28 h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
          <img src={cover} alt="Trust Icon" className="w-16 h-16" />
        </div>
        <p className="mt-4 text-center font-bold  drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
          TRUST
        </p>
        <p className="text-center">Your trust description text goes here.</p>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="w-28 h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
          <img
            src={cover}
            alt="Quality Icon"
            className="w-16 h-16  drop-shadow-[2px_2px_20px_rgba(0,216,255,1)]"
          />
        </div>
        <p className="mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
          AND QUALITY
        </p>
        <p className="text-center">Your quality description text goes here.</p>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="w-28 h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
          <img src={cover} alt="Innovation Icon" className="w-16 h-16" />
        </div>
        <p className="mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)] ">
          INNOVATION
        </p>
        <p className="text-center">
          Your innovation description text goes here.
        </p>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="w-28 h-28 bg-icon-gradient  rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
          <img src={cover} alt="Support Icon" className="w-16 h-16" />
        </div>
        <p className="mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
          RELIABLE SUPPORT
        </p>
        <p className="text-center">Your support description text goes here.</p>
      </div>
    </div>
  );
}

export default HeroFeat;
