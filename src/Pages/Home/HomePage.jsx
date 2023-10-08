
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Footer from '../../Footer/Footer';
import Gallary from '../../Gallary/Gallary';
import Testimonial from '../../Testimonials/Testimonial';

const HomePage = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Gallary></Gallary>
            <Testimonial></Testimonial>
           <Footer></Footer>
          
        </div>
    );
};

export default HomePage;