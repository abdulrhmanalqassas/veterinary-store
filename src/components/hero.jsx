import cover from "../assets/cover.jpg";
function Hero({ children }) {
  return (
    <section
      className=" bg-cover bg-center h-[80vh] md:h-screen bg-fixed"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="  inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col  items-center justify-center h-full relative ">
        <div className=" grow text-center text-white   flex justify-center md:justify-start content-start  flex-col w-full pt-20 px-10 sm:p-12 md:p-24">
          <h1 className="text-left text-5xl md:text-6xl sm:text-6xl font-bold mb-4 sm:w-1 md:w-1/3  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] ">
            Providing Unique Products
          </h1>
          {/* <h2 className="text-left text-2xl md:text-4xl font-bold mb-4 w-1/3  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] ">
          products tailored for veterinary 
          </h2> */}
          <p className="text-left text-3xl  sm:text-4xl md:text-4xl mb-6 w-2/3 h-1/2  drop-shadow-[2px_2px_5px_rgba(0,0,0,0.6)] ">
            Explore our range of products tailored for veterinary needs.
          </p>

        </div>
        {children}
      </div>
    </section>
  );
}

export default Hero;
