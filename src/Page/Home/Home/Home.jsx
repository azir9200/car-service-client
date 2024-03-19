import About from "../About/About";
import Number from "../Number/Number";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Banner from "./Banner/Banner";
import PopularProducts from "./PopularProducts/PopularProducts";


const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Number></Number>
    <PopularProducts></PopularProducts>
    <Team></Team>
    </div>
  );
};

export default Home;