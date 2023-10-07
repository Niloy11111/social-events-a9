import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const EachService = ({service}) => {

    const {id, name, image, price, short_description } = service  ;

    const idParse = parseFloat(id) ;

    return (
        <div className="border rounded-t-lg pb-6">
            <img className="p-2 rounded-t-lg w-full h-[320px]" src={image}></img>
            <h2 className="ml-4 text-xl font-Inter font-semibold mt-4 text-[#0052FF]"> {name} </h2>
            <p className='ml-4 mt-3 text-sm font-normal font-Inter text-[#1C1B1B99]'>{short_description}</p>

            <p className="ml-4 mt-2 font-Inter font-semibold text-base text-[#0052FF]">{price}</p>

           <div className="flex mx-4 justify-between items-center">
         <NavLink to={`/details/${idParse}`}>  <button  className="flex gap-2 items-center px-7 rounded-lg py-3 font-Inter text-[#FFF] font-semibold text-xl mt-2 bg-[#FF444A]">Details  <BsArrowRight></BsArrowRight></button></NavLink>

          

           <p className="text-blue-500 font-Inter text-base font-semibold">Get 20% Off</p>
           </div>
        </div>
    );
};

export default EachService;