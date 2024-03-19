import img1 from '../../../../assets/images/products/1.png'
import img2 from '../../../../assets/images/products/2.png'
import img3 from '../../../../assets/images/products/3.png'
import img4 from '../../../../assets/images/products/4.png'
import img5 from '../../../../assets/images/products/5.png'
import img6 from '../../../../assets/images/products/6.png'

const PopularProducts = () => {
  return (
    <div>
      <div className="text-center mx-auto">
      <p className="text-orange-500">Popular Products</p>
        <p className="text-2xl  font-bold">Browse Our Products</p>
        <p className="w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
    
<div className="grid w-4/6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 ">
  {/* cards */}
  
  {/* cards-2 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img2} alt="Shoes" className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
  {/* cards-3 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img3} alt="Shoes" className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
  {/* cards-4 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img4} alt="Shoes" className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
  {/* cards-5 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img5} alt="Shoes"   className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
  {/* cards-6 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img6} alt="Shoes"  className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
  {/* cards-1 */}

  <div className=" mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img1} alt="Shoes"  className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>$20.00 </p>
  </div>
</div>
</div>



 <p className='text-center mx-auto p-8'>  
  <button className="btn btn-outline btn-primary mx-auto">More Products</button>
  </p>



    </div>
  );
};

export default PopularProducts;