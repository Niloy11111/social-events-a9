
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';

import Gallary from '../../Gallary/Gallary';
import Testimonial from '../../Testimonials/Testimonial';
import Footer from '../../Footer/Footer';

const HomePage = () => {

    const services = useLoaderData()

    return (
        <div className=''>
            <Banner></Banner>
            <Services services={services}></Services>
            <Gallary></Gallary>
            <Testimonial></Testimonial>
          <Footer></Footer>
          
        </div>
    );
};

export default HomePage;