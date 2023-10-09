
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';

import AOS from "aos";
import "aos/dist/aos.css";

import Gallary from '../../Gallary/Gallary';
import Testimonial from '../../Testimonials/Testimonial';
import Footer from '../../Footer/Footer';
import { useEffect } from 'react';

const HomePage = () => {

    
        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);

    const services = useLoaderData()

    return (
        <div data-aos="fade-up" className=''>
            <Banner></Banner>
            <Services services={services}></Services>
            <Gallary></Gallary>
            <Testimonial></Testimonial>
          <Footer></Footer>
          
        </div>
    );
};

export default HomePage;