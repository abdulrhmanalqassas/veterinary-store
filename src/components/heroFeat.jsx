import cover from "../assets/react.svg";
// import logo from "../assets/logo.svg";
import logo from "../assets/logo.png";
function HeroFeat() {
  return (
    <div className="hidden  md:flex flex-wrap justify-around items-center p-4 bg-custom-gradient w-full text-black ">
      <div className="w-1/2 sm:w-1/4 p-2">
        <div className="flex flex-col items-center h-full">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
            <img
              src={logo}
              alt="Trust Icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <p className="mt-2 md:mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
            TRUST
          </p>
          <p className="text-center text-sm md:text-base">
            Trusted care for all animals.
          </p>
        </div>
      </div>

      <div className="w-1/2 sm:w-1/4 p-2">
        <div className="flex flex-col items-center h-full">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
            <img
              src={logo}
              alt="Quality Icon"
              className="w-12 h-12 md:w-16 md:h-16 "
            />
          </div>
          <p className="mt-2 md:mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
            AND QUALITY
          </p>
          <p className="text-center text-sm md:text-base">
            quality products and services guaranteed.{" "}
          </p>
        </div>
      </div>

      <div className="w-1/2 sm:w-1/4 p-2">
        <div className="flex flex-col items-center h-full">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
            <img
              src={logo}
              alt="Innovation Icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <p className="mt-2 md:mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
            INNOVATION
          </p>
          <p className="text-center text-sm md:text-base">
            veterinary solutions for every animal.{" "}
          </p>
        </div>
      </div>

      <div className="w-1/2 sm:w-1/4 p-2">
        <div className="flex flex-col items-center h-full">
          <div className="w-20 h-20 md:w-28 md:h-28 bg-icon-gradient rounded-full flex items-center justify-center drop-shadow-[2px_2px_5px_rgba(125,125,125,0.6)]">
            <img
              src={logo}
              alt="Support Icon"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <p className="mt-2 md:mt-4 text-center font-bold drop-shadow-[5px_5px_5px_rgba(125,125,125,0.8)]">
            RELIABLE SUPPORT
          </p>
          <p className="text-center text-sm md:text-base">
            Always here for you and your animals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroFeat;
