 import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";



const Services = () => {
const [services, setServices] = useState([]);

useEffect(() =>{
fetch('http://localhost:5000/services')
.then(res =>res.json())
.then(data => setServices(data))
}, [])

  return (
    <div className="mt-4">
      <div className="text-center" >
        <div className="text-5xl font-bold">Our Service Area</div>

        <p className="text-xl" >the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
          
          {
            services.map(service => <ServiceCard
              key={service.id}
              service={service}
            ></ServiceCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;