import { NavLink } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {

  const {googleSignIn,  createUser } = useContext(AuthContext)

  const handleLogin = e => {
      e.preventDefault() ;
      const form = new FormData(e.currentTarget)
      const name = form.get('name')
      const email = form.get('email')
      const password = form.get('password')
      const confirmPassword = form.get('confirmPassword')

      
      
      createUser(email, password)
      .then(res => console.log(res.user))
      .catch(error => console.log(error))
  }

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(res => console.log(res.user))
    .catch(error => console.log(error))

  }

    return (
         
        <div className=" rounded bg-[white] flex justify-center items-center h-[84vh]">
         
        <div className="border p-6">

           <div>
           <form onSubmit={handleLogin} className="pl-14 pr-14 rounded w-[570px]">
                <h2 className="mb-14 text-[#191A48] pt-9 font-Inter text-4xl font-bold text-center">Register Here</h2>

                <div>
                <input className="border-[#C7C7C7] pl-5 bg-[#FAFAFB]  rounded-lg py-3 outline-none w-full block border pb-3 mb-8 " type="text" placeholder="Your Name" name="name" />

                    <input className="border-[#C7C7C7] bg-[#FAFAFB] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8" type="emial" placeholder="Username or Email" name="email" required/>

                  <div className="mb-8 flex relative">
                  <input className="border-[#C7C7C7] bg-[#FAFAFB] border  rounded-lg py-3 outline-none w-full block pl-5 pb-3 " type="password" placeholder="password" name="password" required/>
                  <AiFillEye className="text-xl mt-3 right-3 absolute"></AiFillEye>
                  </div>

                    <input className="border-[#C7C7C7] bg-[#FAFAFB] border  pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-4" type="password" placeholder="Confirm password" name="confirmPassword" required/>
                </div>
               <div className="mb-3">
                <p>I agree to the <span className="text-blue-500">Terms and Conditions</span></p>
               </div>



                <button className="rounded-lg py-4 mx-auto w-full bg-[#191A48]  mb-4 text-[#FFF] font-Inter font-semibold">
                   Register
                </button>

                <p className="text-center text-base font-Inter text-[#191A48]">Already have an account? <NavLink to="/login" className="text-green-500 cursor-pointer"> Login</NavLink></p>
        
            </form>

            
          <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
          <div className="bg-[#191A48] h-[1px] w-[200px]">
                </div>
                <p className="text-xl text-[#191A48]">Or</p>
                <div className="bg-[#191A48] h-[1px] w-[200px]">
                </div>
          </div>


          <div onClick={handleGoogleLogin} className="rounded-full cursor-pointer w-4/5 mx-auto justify-center flex items-center gap-2 mb-12 mt-2 py-3 text-base border border-[#C7C7C7] bg-[#FFF]">
          <div className="flex items-center gap-2">
          <FcGoogle className="text-2xl"></FcGoogle>
            <h2 className="font-semibold text-[#191A48] font-Inter">Continue with Google</h2> 
          </div>
          </div >


          
           </div>   

           
        </div>


    </div>
    

            
    );
};

export default Register;