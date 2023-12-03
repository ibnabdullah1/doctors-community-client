// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  return (
    <div className="px-10 py-10">
      <h2 className="text-4xl font-bold mt-4 text-center mb-3">
        What Our Patients Says
      </h2>
      <p className="mb-10 text-center lg:w-[800px] mx-auto ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Autoplay, Pagination, Navigation]}
        className="flex justify-center items-center"
      >
        <SwiperSlide>
          <ReviewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
