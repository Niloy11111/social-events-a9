

const Contact = () => {
    return (
        <div className="lg:mx-32 gap-8 flex flex-col lg:flex-row justify-between">
            <div className="max-w-[400px]">
                <h2 className="text-3xl text-[#21315B] font-Inter">
                    WRITE TO US
                </h2>
                <p className=" mt-4 text-[#383838] font-Inter font-normal">If you are interested in our service or have a general enquiry please fill in your details, submit the form and we will endeavour to get back to you as soon as possible.</p>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl text-[#21315B]">Mohammadpur Road, Altens Industrial <br /> Estate
                     - AB12 </h3>
                <h3 className="text-2xl text-[#21315B]">01224 248313 </h3>
                <h3 className="text-2xl text-[#21315B]">info@take5eventive.co.bd</h3>
            </div>

            <div className="mb-10">
                <input className="border-[#C7C7C7] pl-5 bg-[#FAFAFB] rounded-lg py-3 outline-none w-full block border hover:border-2 hover:border-[#21AA81] pb-3 mb-8 " type="text" placeholder="Your Name" name="name" />

                <input className="border-[#C7C7C7] bg-[#FAFAFB] hover:border-2 hover:border-[#21AA81] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8" type="emial" placeholder="Email" name="email" required />

                <textarea className="border-[#C7C7C7] pl-5 bg-[#FAFAFB] hover:border-2 hover:border-[#21AA81]  rounded-lg py-3 outline-none w-full block border pb-3 mb-2 " name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
                <button className="w-full text-[#FFF] py-4 text-base font-Inter mt-3 rounded bg-[#21AA81]">SEND MESSAGE</button>
               

            </div>


        </div>
    );
};

export default Contact;