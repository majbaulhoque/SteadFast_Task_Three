import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [isError, setIsError] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    // Fetch product data
    const getServicesData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}`);
            setProducts(res.data);
            setFilteredProducts(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    };

    const filterProducts = () => {
        let updatedProducts = products;

        if (categoryFilter) {
            updatedProducts = updatedProducts.filter(product => product.category === categoryFilter);
        }

        if (priceFilter) {
            const maxPrice = Number(priceFilter);
            updatedProducts = updatedProducts.filter(product => product.price <= maxPrice);
        }

        setFilteredProducts(updatedProducts);
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        getServicesData();
    }, []);

    // UseEffect to filter products when filters change
    useEffect(() => {
        filterProducts();
    }, [categoryFilter, priceFilter, products]);

    return (
        <div className="bg-black py-36">
            <h3 className="text-3xl font-bold text-center text-white pb-12">Our Services</h3>
            {
                isError !== "" && <h2>{isError}</h2>
            }
            <div className="max-w-7xl mx-auto p-4 flex justify-between">
                <div>
                    <label className="text-blue-400 text-3xl mr-2 font-bold">
                        Category : 
                    </label>
                    <select 
                        className="w-48 p-2 border border-blue-400 rounded-lg bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                        onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className="flex">
                    <label className="text-blue-400 text-3xl mr-2 font-bold">
                        Max Price : 
                    </label>
                    <input 
                        type="number" 
                        placeholder="Enter Max Price"
                        className="w-48 p-2 border border-blue-400 rounded-lg bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                        onChange={(e) => setPriceFilter(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto gap-4 p-4">
                {
                    filteredProducts.map(product => {
                        const { id, img, title, description, price, category } = product || {};
                        return (
                            <div key={id} className="flex justify-center">
                                <div className="card w-80 sm:w-[15rem] md:w-[18rem] lg:w-[19rem] p-3 bg-white text-black hover:bg-black hover:text-white transition duration-300 ease-in-out" data-aos="zoom-in">
                                    <img src={img} alt="" className="object-cover w-full h-48 rounded" />
                                    <div className="card-body items-center">
                                        <h2 className="text-xl font-bold text-center my-4">{title}</h2>
                                        <p className="text-justify pb-2">{description}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold">{category}</p>
                                        <p className="font-bold">Price: {price}</p>
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
