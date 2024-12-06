import cover from "../assets/cover.jpg";
function Hero({ children }) {
  return (
    <section
      className=" bg-cover bg-center h-screen bg-fixed"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="  inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col  items-center justify-center h-full relative ">
        <div className=" grow text-center text-white  flex justify-start content-start  flex-col w-full pt-20 px-10 sm:p-12 md:p-24">
          <h1 className="text-left text-2xl md:text-6xl sm:text-6xl font-bold mb-4 sm:w-1 md:w-1/3  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] ">
            Providing Unique Products
          </h1>
          {/* <h2 className="text-left text-2xl md:text-4xl font-bold mb-4 w-1/3  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] ">
          products tailored for veterinary 
          </h2> */}
          <p className="text-left  text-lg md:text-xl mb-6 w-1/3  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)]">
            Explore our range of products tailored for veterinary needs.
          </p>
          <div className="flex sm:flex-col  md:flex md:flex-row text-left w-1/2  ">
            <a
              href="#products"
              className="m-1 bg-icon-gradient text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition w-fit   drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)]"
            >
              Shop Now
            </a>
            <a
              href="#products"
              className=" m-1 bg-icon-gradient text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-600 transition w-fit  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)]"
            >
              contact us
            </a>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Hero;
