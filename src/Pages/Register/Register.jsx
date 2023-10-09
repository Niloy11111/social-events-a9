import { NavLink } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Register = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const { googleSignIn, createUser } = useContext(AuthContext)

  const handleLogin = e => {

    e.preventDefault();
    const form = new FormData(e.currentTarget)

    const email = form.get('email')
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    const accepted = e.target.terms.checked;


    setError('')

    if (! /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      swal("Sorry !", "Password Should be minimum 6 characters and should have one Capital and Special letter!", "error")
     
    }
    else if (!accepted) {
      swal("Sorry !", " please accept our terms and conditions !", "error")
  
    }
    else {
      createUser(email, password)
        .then(res => { 
          console.log(res.user)
          swal("Thank you!", "You have successfully completed your registration!", "success") 
        } )
        .catch(error => console.log(error))
    }

  }

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(res => console.log(res.user))
      .catch(error => console.log(error))

  }

  return (

    <div className="rounded bg-[white] mb-10 -mx-6 flex lg:justify-center lg:items-center h-full lg:h-[84vh]">


      <div className="border lg:p-6">

        <div className="">
          <form onSubmit={handleLogin} className="px-7 lg:px-14 rounded  lg:w-[570px]">
            <h2 className="mb-10 text-[#191A48] pt-7 font-Inter text-4xl font-bold text-center">Register Here</h2>

            <div>
              <input className="border-[#C7C7C7] pl-5 bg-[#FAFAFB]  rounded-lg py-3 outline-none w-full block border pb-3 mb-8 " type="text" placeholder="Your Name" name="name" />

              <input className="border-[#C7C7C7] bg-[#FAFAFB] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8" type="emial" placeholder="Username or Email" name="email" required />



              <div className='relative mb-8'>

                <input type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered border-[#C7C7C7] rounded-lg py-3 outline-none block pl-5 pb-3  bg-[#FAFAFB] w-full" name='password'
                  required />

                <span onClick={() => setShowPassword(!showPassword)} className='text-xl cursor-pointer absolute top-3 right-2' >
                  {
                    showPassword ? <AiFillEye ></AiFillEye> :

                      <AiFillEyeInvisible ></AiFillEyeInvisible>
                  }
                </span>
              </div>

              <input className="border-[#C7C7C7] bg-[#FAFAFB] border  pl-5 rounded-lg py-3 outline-none w-full block border-b pb-3 mb-4" type="password" placeholder="Confirm password" name="confirmPassword" required />
            </div>

            <div className="mb-3">
              <input type="checkbox" name="terms" id="terms" />
              <label className="mt-2 font-Inter"> Accept our </label>
              <a className="text-blue-500">Terms and Conditions</a>
            </div>


            {
              error && <p className="text-red-700">{error}</p>
            }

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


          <div onClick={handleGoogleLogin} className="rounded-full cursor-pointer w-4/5 mx-auto justify-center flex items-center gap-2 mb-7 mt-2 py-3 text-base border border-[#C7C7C7] bg-[#FFF]">
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