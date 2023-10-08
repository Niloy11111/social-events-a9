
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';


const Root = () => {
    return (
        <div className='mx-36 mt-14 bg-[#FFF]'>
         <NavBar></NavBar>
          <Outlet></Outlet> 
         
        </div>
    );
};

export default Root;