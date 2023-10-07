
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';

const HomePage = () => {

    const services = useLoaderData()
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
        </div>
    );
};

export default HomePage;