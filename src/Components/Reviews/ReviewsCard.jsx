const ReviewsCard = () => {
  return (
    <div className=" border-[2px] rounded-md px-10  py-14">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            className="w-[50px] h-[50px] object-cover rounded-[50%]"
            src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-lg">Awlad Hossain</h2>
            <p>Product Designer</p>
          </div>
        </div>
        <div>
          <img
            className="w-[50px] h-[50px]"
            src="https://www.svgrepo.com/show/96336/inverted-commas.svg"
            alt=""
          />
        </div>
      </div>
      <p>
        Lorem Ipsum has been the industry’s standard dummy text ever since the
        1500s, when an unknow printer tool a galley of type and scrambled it to
        make type specimen book has survived not only five centurines.
      </p>
    </div>
  );
};

export default ReviewsCard;
