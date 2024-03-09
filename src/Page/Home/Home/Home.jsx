import About from "../About/About";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";


const Home = () => {
  return (
    <div>
      <p>This is home for car repair</p>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;