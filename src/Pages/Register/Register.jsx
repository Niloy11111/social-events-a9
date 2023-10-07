import { NavLink } from "react-router-dom";



const Register = () => {
    return (




          
        <div className="bg-[#2148C0] rounded flex justify-center items-center h-[84vh]">
         
        <div className="">

           <div>
           <form className="pl-14 pr-14 rounded w-[570px]">
                <h2 className="mb-14 text-[#FFF] pt-9 font-Inter text-4xl font-bold text-center">Register Here</h2>

                <div>
                <input className="pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-8 border-[#D5E5FB]" type="text" placeholder="First Name" name="firstName" />

                <input className="pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-8 border-[#D5E5FB]" type="text" placeholder="Last Name" name="lastName" />



                    <input className=" rounded-lg py-3 outline-none w-full block pl-5 pb-3 mb-8" type="emial" placeholder="Username or Email" name="email" required/>

                    <input className=" rounded-lg py-3 outline-none w-full block pl-5 pb-3 mb-10" type="password" placeholder="password" name="password" required/>

                    <input className="pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-8 border-[#D5E5FB]" type="password" placeholder="Confirm password" name="confirmPassword" required/>

                </div>

                <button className="rounded-lg py-4 mx-auto w-full bg-[#FFF]  mb-4 text-xl text-[#2148C0] font-Inter font-semibold">
                   Register
                </button>

                <p className="text-center text-base font-Inter text-[#FFF]">Already have an account? <NavLink to="/login" className="text-green-500 cursor-pointer"> Login</NavLink></p>
        
            </form>

            
          <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
          <div className="bg-[#FFF] h-[1px] w-[200px]">
                </div>
                <p className="text-xl text-[#FFF]">Or</p>
                <div className="bg-[#FFF] h-[1px] w-[200px]">
                </div>
          </div>


          <div className="cursor-pointer mb-20 flex items-center mt-2 py-2 w-full text-base border border-[#C7C7C7] bg-[#FFF] rounded-full">
            <img className="ml-3 w-[37px]" ></img>
            <h2 className="text-center font-semibold mx-auto text-[#2148C0] font-Inter">Continue with Google</h2> 
          </div >


          
           </div>   

           
        </div>


    </div>
    

            
    );
};

export default Register;