import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const Team = () => {
  return (
    <div>
      <div className="text-center mx-auto">  
      <p className="w-20 text-xl font-bold mx-auto bg-slate-500 rounded-xl">TEAM</p>
      <h2 className="m-4 text-2xl font-bold">Meat Our Team</h2>
      <p className="w-3/5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse dolor eos molestiae, quae optio laboriosam laborum recusandae sit cum labore soluta, iusto explicabo ullam expedita obcaecati! Molestias, facilis incidunt.</p>
      </div>
      <div className="grid w-4/6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 ">
  {/* cards */}
  
  {/* cards-1 */}

  <div className="mt-8 w-52 h-72 text-center bg-base-100 shadow-2xl">
  <figure><img src={img1} alt="img1" className='bg-base-300' /></figure>
  <div className="">
    
  <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Car Engin Plug</p>
   <p>Engin Expat </p>
  </div>
</div>
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
    <p>Body Expat </p>
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
    <p>Wheel Expat </p>
    <div>
      p
    </div>
  </div>
</div>

 

 

 

 
</div>

    </div>
  );
};

export default Team;