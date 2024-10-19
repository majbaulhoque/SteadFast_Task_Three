import { useState } from 'react';
import Bg from '../../../public/image/bg.jpg'


const Hero = () => {
    const [isModalOpen, setIsModal] = useState(true);

    const openModal = () => {
        setIsModal(true)
    };

    const closeModal = () => {
        setIsModal(false)
    }

    return (
        <div>
            <div className="relative">
                <img src={Bg} alt="" className='w-[100%] h-[90vh] object-cover' />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold mb-4 text-center">Welcome to STEADfast IT</h1>
                    <p className="text-2xl mb-6">Your Trusted It Partner</p>
                    <button className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black" onClick={openModal}>Learn More</button>
                </div>
            </div>
            <div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-8 rounded-lg max-w-md text-center relative">
                            <h2 className="text-3xl font-bold mb-4">Welcome to STEADfast IT</h2>
                            <p className="mb-6">This is modal content</p>
                            <button
                                className="px-4 py-2 bg-black text-white hover:bg-white hover:text-black"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Hero;