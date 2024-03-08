import { BsArrowRight } from 'react-icons/bs';
import { Link} from 'react-router-dom';

const EachService = ({service}) => {

    const {id, name, image, price, short_description } = service  ;

    const idParse = parseFloat(id) ;

    return (
        <div className="border rounded-t-lg pb-6">
                                    <img className="p-2 rounded-t-lg w-full h-[320px]" src={image}></img>
            <h2 className="ml-4 text-xl font-Inter font-semibold mt-4 text-[#0052FF]"> {name} </h2>
            <p className='ml-4 mt-3 text-sm font-normal font-Inter text-[#1C1B1B99]'>{short_description}</p>

            <p className="ml-4 mt-2 font-Inter font-semibold text-base text-[#0052FF]">{price}</p>

           <div className="flex mx-4 justify-center lg:justify-between items-center">
         <Link to={`/serviceDetails/${idParse}`}>  <button  className="flex gap-2 items-center px-5 lg:px-7 rounded-lg py-3 font-Inter text-[#FFF] font-semibold text-lg lg:text-xl mt-2 bg-[#FF444A]">Details  <BsArrowRight></BsArrowRight></button></Link>

           </div>
        </div>
    );
};

export default EachService;