import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {

  const { signInUser, user , createUser, googleSignIn, logOut} = useContext(AuthContext) ;

  const [toogle, setToogle] = useState(true)

  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = e => {

    e.preventDefault() ;
    const form = new FormData(e.currentTarget)  
    const email = form.get('email')
    const password = form.get('password')
    const accepted = e.target.terms.checked;



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

  };

  
  const handleSignInUser = e => {

    e.preventDefault();
    const form = new FormData(e.currentTarget)

    const email = form.get('email')
    const password = form.get('password')

    signInUser(email, password)
       .then(res => {
        console.log(res.user)

       })
       .catch(error => console.log(error))

  }


  const handleGoogleLogin = () => {
    googleSignIn()
    .then(res => { 
      console.log(res.user)
      swal("Login Successful!", "Welcome back!", "success")
    })
    .catch(error => console.log(error))

  }

  const handleLogOut = () => {
    logOut()
  }

 
  

  if(toogle){

    return (

      <>

      {
        user && <div className="flex justify-center">

         <div className=" border px-14 py-8">
        
          <img className="mx-auto rounded-full" src={user.photoURL}></img>
          <h2 className="mt-4 mb-3 text[#191A48] text-xl font-Inter font-semibold "> {user.displayName} </h2>
          <div className="flex justify-center">
          <button onClick={handleLogOut} className="text-xl font-medium text-[#FFF] px-5 font-Inter py-2 rounded-lg bg-gradient-to-r from-[#F00] to-[#FF8938]">LogOut</button>
          </div>
         </div>

        </div>
      }

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


      <button className="rounded-lg py-4 mx-auto w-full bg-[#191A48]  mb-4 text-[#FFF] font-Inter font-semibold">
        Register
      </button>

      <p className="text-center text-base font-Inter text-[#191A48]">Already have an account? <a onClick={() => setToogle(! toogle)} className="text-blue-600 cursor-pointer"> Login </a>   </p>

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



      
     
      </>
  
  );
 
  } 
  else{
    return  <>

{
        user && <div className="flex justify-center">

         <div className=" border px-14 py-8">
        
          <img className="mx-auto rounded-full" src={user.photoURL}></img>
          <h2 className="mt-4 mb-3 text[#191A48] text-xl font-Inter font-semibold "> {user.displayName} </h2>
          <div className="flex justify-center">
          <button onClick={handleLogOut} className="text-xl font-medium text-[#FFF] px-5 font-Inter py-2 rounded-lg bg-gradient-to-r from-[#F00] to-[#FF8938]">LogOut</button>
          </div>
         </div>

        </div>
      }
    
    <div className=" rounded bg-[white] flex justify-center items-center h-[83vh]">
       
       <div className="border -mt-20 lg:p-6">

          <div>
          <form onSubmit={handleSignInUser} className="px-8 lg:px-14 rounded lg:w-[570px]">
               <h2 className="mb-14 text-[#191A48] pt-9 font-Inter text-4xl font-bold text-center">Login Here</h2>

               <div>
             
                   <input className="border-[#C7C7C7] bg-[#FAFAFB] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8" type="emial" placeholder="Username or Email" name="email" required/>

                   <input className="border-[#C7C7C7] bg-[#FAFAFB] border  rounded-lg py-3 outline-none w-full block pl-5 pb-3 mb-10" type="password" placeholder="password" name="password" required/>


               </div>

               <button className="rounded-lg py-4 mx-auto w-full bg-[#191A48]  mb-4 text-[#FFF] font-Inter font-semibold">
                  Login
               </button>

               <p className="text-center text-base font-Inter text-[#191A48]">Don't have an account? <a onClick={() => setToogle(! toogle)} className="text-blue-600 cursor-pointer"> Create an Account</a> </p>
       
           </form>

           
         <div className="flex mb-5 items-center gap-2 mt-6 justify-center">
         <div className="bg-[#191A48] h-[1px] w-[200px]">
               </div>
               <p className="text-xl text-[#191A48]">Or</p>
               <div className="bg-[#191A48] h-[1px] w-[200px]">
               </div>
         </div>


         <div onClick={handleGoogleLogin} className=" rounded-full cursor-pointer w-4/5 mx-auto justify-center flex items-center gap-2 mb-12 mt-2 py-3 text-base border border-[#C7C7C7] bg-[#FFF]">
         <div className="flex items-center gap-2">
         <FcGoogle className="text-2xl"></FcGoogle>
           <h2 className="font-semibold text-[#191A48] font-Inter">Continue with Google</h2> 
         </div>
         </div >


         
          </div>   

          
       </div>


   </div>
    </>

  }
   
}


export default Login;