 import img1 from '../../../assets/images/banner/3.jpg'
import ServiceLeftSide from '../ServiceLeftSide/ServiceLeftSide';
import ServiceRightSide from '../ServiceRightSide/ServiceRightSide';


const ServicesHome = () => {
  return (
  
       <div>
      <div className="carousel w-full h-[200px]">
        <img src={img1} alt="" className='w-full h-[300px]'/>
      </div>
      <div className='lg:flex gap-4 mt-8'>   
      <div className='w-9/12 border rounded-md shadow-lg p-6 ml-6'>
        <ServiceLeftSide></ServiceLeftSide>
               
      </div>
      
      <div className='lg:w-3/12  p-6  border shadow-lg'>
        <ServiceRightSide></ServiceRightSide>
      
      </div>
      </div>
    </div>
   
  );
};

export default ServicesHome;