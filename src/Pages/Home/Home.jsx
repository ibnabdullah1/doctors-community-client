import Location from "../../Components/Location/Location";
import Reviews from "../../Components/Reviews/Reviews";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <Services />
      <Location />
      <Reviews />
    </div>
  );
};

export default Home;
