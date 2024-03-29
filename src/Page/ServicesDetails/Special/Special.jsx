import logo from '../../../assets/logo.svg';

const Special = () => {
  return (
    <div>
       <div className=" border p-8 bg-black   rounded-lg mx-auto">
     <img src={logo} alt="" className='mx-auto bg-white p-6 rounded-3xl' />
     
     <h3  className='text-center text-white'>Need Help ? We are here to help you.</h3>

     <div className='rounded-lg p-6 mt-6 bg-white font-'>
      <h3 className='font-semibold'> <span className='text-orange-500'>Car Doctor  </span> Special</h3>
      <small>Save Up To <span className='text-orange-500'>   25%  Off  </span></small>
     </div>
      
    </div>
    </div>
  );
};

export default Special;