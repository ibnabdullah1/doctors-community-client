const Banner = () => {
  return (
    <div className="lg:flex  justify-center py-20 px-5 md:px-10 bg-[#07332F]  min-h-[109vh] items-center">
      <div className="flex-1 text-white">
        <h2 className="md:text-5xl text-4xl lg:text-6xl my-5 font-bold">
          Your Best Medical <br /> Help Center
        </h2>
        <p className=" md:w-[497px] text-lg">
          Lorem Ipsum is simply dummy text they are printing typesetting has
          been the industry’s standard.
        </p>
        <button className="bg-[#0e6962] hover:bg-[#0c554f] px-4 py-2 rounded font-medium mt-5">
          All Service
        </button>
      </div>
      <div className="flex-1 md:mt-10 mt-10">
        <div className="relative ">
          <div className="flex  lg:-top-14 ">
            <img
              className=" md:w-[283px]  w-[183px] h-[183px] md:h-[283px]"
              src="https://i.ibb.co/JHPR7sz/Rectangle-20077.png"
              alt=""
            />

            <img
              className=" md:w-[283px] z-20  w-[183px] h-[183px] md:h-[283px]"
              src="https://i.ibb.co/cbyBJzB/Rectangle-20075.png"
              alt=""
            />
          </div>
          <img
            className="relative z-10 block mx-auto right-0  -left-6 md:-left-16 lg:-left-10 -top-24 md:-top-36 md:w-[283px]  w-[183px] h-[183px] md:h-[283px]"
            src="https://i.ibb.co/dPYkQN5/Rectangle-20076.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
