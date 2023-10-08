import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Login = () => {

  const { signInUser, user ,  googleSignIn, logOut} = useContext(AuthContext) ;


  console.log(user)
  const handleSignInUser = e => {

    e.preventDefault() ;
    const form = new FormData(e.currentTarget)  
    const email = form.get('email')
    const password = form.get('password')


    signInUser(email, password)
    .then(res => {
      console.log(res.user)  
      swal("Good job!", "You clicked the button!", "success") 
    })
    .catch(error => {
      console.log(error)
      swal("Sorry !", "Password or email does not match!", "error")
    })
  }

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(res => { 
      console.log(res.user)
      swal("Good job!", "You clicked the button!", "success")
    })
    .catch(error => console.log(error))

  }

  const handleLogOut = () => {
    logOut()
  }
  
    return (

        <>

        {
          user && <div className="flex justify-center">

           <div className="bg-[] border px-14 py-8">
          
            <img className="mx-auto rounded-full" src={user.photoURL}></img>
            <h2 className="mt-4 mb-3 text[#191A48] text-xl font-Inter font-semibold "> {user.displayName} </h2>
            <button onClick={handleLogOut} className="text-xl font-medium text-[#FFF] px-6 font-Inter py-3 rounded-lg bg-gradient-to-r from-[#F00] to-[#FF8938]">LogOut</button>
           </div>

          </div>
        }
        
        <div className=" rounded bg-[white] flex justify-center items-center h-[84vh]">
         
         <div className="border p-6">
 
            <div>
            <form onSubmit={handleSignInUser} className="pl-14 pr-14 rounded w-[570px]">
                 <h2 className="mb-14 text-[#191A48] pt-9 font-Inter text-4xl font-bold text-center">Login Here</h2>
 
                 <div>
               
                     <input className="border-[#C7C7C7] bg-[#FAFAFB] rounded-lg py-3 outline-none w-full border b block pl-5 pb-3 mb-8" type="emial" placeholder="Username or Email" name="email" required/>
 
                     <input className="border-[#C7C7C7] bg-[#FAFAFB] border  rounded-lg py-3 outline-none w-full block pl-5 pb-3 mb-10" type="password" placeholder="password" name="password" required/>
 
 
                 </div>
 
                 <button className="rounded-lg py-4 mx-auto w-full bg-[#191A48]  mb-4 text-[#FFF] font-Inter font-semibold">
                    Login
                 </button>
 
                 <p className="text-center text-base font-Inter text-[#191A48]">Don't have an account? <NavLink to="/register" className="text-green-500 cursor-pointer"> Register </NavLink></p>
         
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



  


    
    );
};

export default Login;