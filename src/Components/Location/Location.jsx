import { MdOutlineWatchLater } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
const Location = () => {
  return (
    <div className="lg:flex  justify-center gap-4 py-10 px-10">
      <div className="bg-[#07332F]  lg:mb-0 mb-3 w-full flex text-white items-stretch gap-2 rounded px-12 py-16">
        <MdOutlineWatchLater className="text-4xl" />
        <div>
          <h2 className="text-xl font-semibold ">Opening Hours</h2>
          <p className="w-[220px]">Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div className="bg-[#164e49] lg:mb-0 mb-3  w-full flex text-white items-stretch gap-2 rounded px-12 py-16">
        <SlLocationPin className="text-4xl" />
        <div>
          <h2 className="text-xl font-semibold ">Our Locations</h2>
          <p className="w-[250px]">Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div className="bg-[#07332F] lg:mb-0 mb-3  w-full flex text-white items-stretch gap-2 rounded px-12 py-16">
        <MdOutlineWatchLater className="text-4xl" />
        <div>
          <h2 className="text-xl font-semibold ">Contact Us</h2>
          <p>+88 01750 00 00 00 </p>
          <p>+88 01750 00 00 00</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
