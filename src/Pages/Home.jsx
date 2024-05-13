import Banner from "../Components/Banner";
import Contac from "../Components/Contac";
import ExtraSection from "../Components/ExtraSection";
import RecentQueries from "../Components/RecentQueries";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="mb-8">

            <Slider></Slider>
            <div className="text-center md:mb-20 mb-10">
                <h1 className="text-xl mt-10 md:text-4xl md:mt-20   font-bold text-blue-900">Explore Alternative Products and Enhance Your Choices</h1>
                <p className="text-[12px] md:text-[16px] font-semibold text-gray-500 mt-2 lg:w-[900px] mx-auto">Beckons users to broaden their horizons by considering alternative options. By diversifying product exploration, users can make more informed decisions, discovering new solutions tailored to their needs. This platform empowers users to expand their perspectives, unlocking a world of possibilities and enriching their consumer experience.</p>
            </div>
      <Banner></Banner>
      <div className="text-center md:mb-20 mb-10">
                <h1 className="text-xl mt-10 md:text-4xl md:mt-20   font-bold text-blue-900 underline">Recent Additions to Our Product Lineup</h1>
                
            </div>
      <RecentQueries></RecentQueries>
      <Contac></Contac>
          <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;