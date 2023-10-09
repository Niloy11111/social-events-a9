import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <div className="flex justify-between mb-14">
            
            <div>
              <h2 className="text-3xl font-Inter font-bold"> <span className="text-[#F85559]">E</span>ventive</h2>
            </div>

            
           <div>
            <ul className="flex gap-8 text-lg font-Inter font-normal">

            <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#21AA81] underline" : ""
  }><li>Home</li></NavLink>


            <NavLink to='/register' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#21AA81] underline" : ""
  }><li>Register</li></NavLink>

            <NavLink to='/login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#21AA81] underline" : ""
  }><li>Login</li></NavLink>

            <NavLink to='/contact' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#21AA81] underline" : ""
  }><li>Contact Us</li></NavLink>

<NavLink to='/details' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#21AA81] underline" : ""
  }><li>Articles</li></NavLink>


            </ul>
           </div>
            
            

        </div>

    );
};

export default NavBar;