
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Footer from '../../Footer/Footer';
import Gallary from '../../Gallary/Gallary';

const HomePage = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Gallary></Gallary>
           <Footer></Footer>
          
        </div>
    );
};

export default HomePage;