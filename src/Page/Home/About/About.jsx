import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative ' >
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="w-2/4 absolute top-1/2 right-14 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className='lg:w-1/2 mt-8' >
          <h1 className="text-3xl ml-8 text-orange-500 font-bold">About Us</h1>
          <p className="text-5xl font-bold">We are qualified & of experience in this field.</p>
          <p className='p-6' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <p className='p-6' >the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;