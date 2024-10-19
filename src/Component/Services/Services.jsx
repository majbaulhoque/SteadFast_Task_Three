import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [isError, setIsError] = useState('')
    const [services, setServices] = useState([])

    const getServicesData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}`)
            setServices(res.data)
        } catch (error) {
            setIsError(error.message)
        }
    }

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,    
        });
        getServicesData()
    }, [])
    return (
        <div className="bg-black py-36">
            <h3 className="text-3xl font-bold text-center text-white pb-12">Our Services</h3>
            {
                isError !== "" && <h2>{isError}</h2>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4 p-4">
                {
                    services.map(service => {
                        const { id, img, title, description } = service || {};
                        return (
                            <div key={id} className="flex justify-center">
                                <div className="card w-80 sm:w-[15rem] md:w-[18rem] lg:w-[19rem] p-3 bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out" data-aos="zoom-in">
                                    <img src={img} alt="" className="object-cover w-full h-48 rounded" />
                                    <div className="card-body items-center">
                                        <h2 className="text-xl font-bold text-center my-4">{title}</h2>
                                        <p className="text-justify pb-2">{description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>


        </div>
    );
};

export default Services;