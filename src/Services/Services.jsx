
import EachService from "./EachService";


const Services = ({services}) => {


    return (
        <div>
            <h2 className="text-4xl font-Inter font-bold py-24 text-center text-[#121212]">Our <span className="text-[#0052FF]">Services</span></h2>

           <div className="grid grid-cols-3 gap-6">
           {
                services.map(service => <EachService key={service.id} service={service}></EachService>)
            }
           </div>
        </div>
    );
};

export default Services;