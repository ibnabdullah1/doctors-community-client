const ServiceCard = ({ img, title, details1, details2 }) => {
  return (
    <div>
      <div>
        <img className="w-full rounded-xl" src={img} alt="" />
      </div>
      <h2 className="text-3xl font-bold mt-5 mb-3">{title}</h2>
      <p className="mb-4">{details1}</p>
      <p className="mb-4">{details2}</p>
      <button className="inline-block px-12 py-3 text-sm font-medium text-[#0c554f] border border-[#0c554f] rounded hover:bg-[#0c554f] hover:text-white active:bg-[#0c554f] focus:outline-none focus:ring-[#169186]">
        Details
      </button>
    </div>
  );
};

export default ServiceCard;
