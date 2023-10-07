import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (

        <div className="flex justify-between mb-14">
            
            <div>
              <h2 className="text-3xl font-Montserrat font-bold"> <span className="text-[#F85559]">E</span>vents</h2>
            </div>

            
           <div>
            <ul className="flex gap-8 text-lg font-Montserrat font-normal">
            <NavLink><li>Home</li></NavLink>
            <NavLink><li>Details</li></NavLink>
            <NavLink><li>Register</li></NavLink>
            <NavLink><li>Login</li></NavLink>
            </ul>
           </div>
            
            

        </div>

    );
};

export default NavBar;