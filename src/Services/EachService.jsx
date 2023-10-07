

const EachService = ({service}) => {

    const {name, image, price } = service  ;

    console.log(image)

    return (
        <div>
            <img className="rounded-t-lg w-full h-[320px]" src={image}></img>
            <h2 className="ml-4 text-xl font-Montserrat font-semibold mt-4 text-[#0052FF]"> {name} </h2>
            <p className="ml-4 mt-2 font-Montserrat font-semibold text-base text-[#0052FF]">{price}</p>

            <button className="ml-4 px-7 rounded-lg py-3 font-Montserrat text-[#FFF] font-semibold text-xl mt-2 bg-[#FF444A]">Details</button>
        </div>
    );
};

export default EachService;