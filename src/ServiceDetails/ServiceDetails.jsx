import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {

    const AllservicesDetails = useLoaderData()

    const params = useParams()

    const idParse = parseFloat(params.id)

    const clickedService = AllservicesDetails.find(each => parseFloat(each.id) === idParse)

    const { image, service_description } = clickedService;

    return (
        <div>

            <div className="">
                <img className="w-[80%] rounded-lg mx-auto" src={image}></img>

                <p className="text-[#1C1B1B] mt-6 font-Inter font-semibold text-lg">
                    {service_description}
                </p>

                <h2 className="text-5xl font-Inter font-semibold py-14 text-center"><span className="text-[#E76F51]">Frequently </span>Asked Questions</h2>

          <div className="flex items-center">
          <div className="flex-1">
                    <img className="" src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg"></img>
                </div>


                <div className="flex-1 space-y-7">
                    
                <div className="rounded border-[#D5E5FB] collapse collapse-arrow border">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium font-Inter text-[#383838]">
                        {clickedService.faqs[0].question}
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#7E848C] font-Inter text-base font-normal">  {clickedService.faqs[0].answer}</p>
                    </div>
                </div>

                
                <div className="rounded border-[#D5E5FB] collapse collapse-arrow border ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-Inter text-[#383838]">
                        {clickedService.faqs[1].question}
                    </div>
                    <div className="rounded border-[#D5E5FB]  collapse-content">
                        <p className="text-[#7E848C] font-Inter text-base font-normal">  {clickedService.faqs[1].answer}</p>
                    </div>
                </div>
                <div className=" rounded border-[#D5E5FB]  collapse collapse-arrow border">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-Inter text-[#383838]">
                        {clickedService.faqs[2].question}
                    </div>
                    <div className="collapse-content">
                        <p className="text-[#7E848C] font-Inter text-base font-normal">  {clickedService.faqs[2].answer}</p>
                    </div>
                </div>
                </div>
          </div>



            </div>

        </div>
    );
};

export default ServiceDetails;