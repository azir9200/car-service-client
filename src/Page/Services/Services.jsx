import img1 from '../../assets/images/banner/3.jpg'
import img2 from '../../assets/images/banner/5.jpg'

const Services = () => {
  return (
    <div>
      <div className="carousel w-full h-[200px]">
        <img src={img1} alt="" className='w-full h-[300px]'/>
      </div>
      <div className='lg:flex'>   
      <div className='w-8/12 border border-red-700 p-6'>
        
        <img src={img2} alt="" className='w-5/6 h-[300px] mx-auto rounded-lg'/>
        <h3 className='font-bold text-xl mt-4' >Unique Car Engine Service</h3>
        <p className='mb-4 p-6 shadow-md'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there  anything embarrassing hidden in the middle of text. </p>


        <div className='grid grid-cols-2 lg:grid-cols-2 gap-14 '>
        <div className='border  shadow-xl p-2'>
           <h4 className='font-medium text-lg p-2'>  Unique Car Services</h4>
            <p className='mr-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis expedita voluptate repellendus, delectus eaque placeat hic,.</p>
          </div>
          <div className='border  shadow-xl p-2'>
          <h4 className='font-medium text-lg p-2'>24/7 Fast Services</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis expedita voluptate repellendus, delectus eaque placeat hic, unde sequidolorum.</p>
          </div>
          <div className='border  shadow-xl p-2'>
          <h4 className='font-medium text-lg p-2' >Easy customer Services</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis expedita voluptate repellendus, delectus eaque placeat hic, unde sequivoluptatem dolorum.</p>
          </div>
          <div className='border  shadow-xl p-2'>
          <h4 className='font-medium text-lg p-2'> Quality cost Services</h4>
            <p> expedita voluptate repellendus, delectus eaque placeat hic, unde sequi alias facere quam quaerat, corporis eveniet illo porro dolores voluptatem dolorum.</p>
          </div>
        </div>
      </div>
      
      <div className='w-4/12 border border-green-500'>
      <h2 className='font-semibold text-2xl'> Services</h2>
      <div className='p-2 hover:bg-red-500 shadow-xl rounded-xl'>
        <p>Full Car Repair</p>
      </div>
      <div className='p-2 hover:bg-red-500 shadow-xl rounded-xl'>
        <p>Engine Oil Change</p>
      </div>
      <div className='p-2 hover:bg-red-500 shadow-xl rounded-xl'>
        <p>Engine Repair</p>
      </div>
      <div className='p-2 hover:bg-red-500 shadow-xl rounded-xl'>
        <p>Battery Charge</p>
      </div>
      <div className='p-2 hover:bg-red-500 shadow-xl rounded-xl'>
        <p>Automatic Services</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Services;