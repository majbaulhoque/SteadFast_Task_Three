
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/')
    }
    return (
        <div >
            <title>Error</title>
            <div className=" items-center text-center justify-center h-screen mt-40">
            <h3 className="text-6xl font-semibold block mr-2">Oops! </h3>
            <h4 className="text-4xl font-semibold"> 404 - PAGE NOT FOUND</h4>
            <br />
            <button onClick={handleButton} className="px-4 bg-blue-500 py-2 rounded-md font-bold">Back To Home</button>
            </div>
        </div>
    );
};

export default ErrorElement;