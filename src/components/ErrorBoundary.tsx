import { useRouteError } from "react-router-dom";
import "../App.css";

const ErrorPage = () => {
    const error = useRouteError();
    let errorInfo;

    try {
        errorInfo = JSON.parse(error.message);
    } catch {
        errorInfo = { message: "Unknown error occurred", status: 500 };
    }

    return (
        <div className="h-screen flex items-center justify-center bg-white-300 text-white">
            {/* <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg"> */}
            <div className="text-center p-6 bg-white rounded-lg ">
                <h2 className="text-6xl font-bold text-gray-800 bg-white">Error {errorInfo.status || 500}</h2>
                <p className="text-xl mt-4 text-gray-800">
                    {errorInfo.message || "Something went wrong"}
                </p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="mt-6 px-6 py-2 bg-white-500 text-blue-800 text-lg font-medium rounded hover:underline"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
