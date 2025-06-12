import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
    const location = useLocation();

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Mohammad SAJIB</title>
                <meta
                    name="description"
                    content="Sorry, the page you are looking for does not exist. Please return to the homepage or explore other sections."
                />
                <meta name="robots" content="noindex, follow" />
                <link rel="canonical" href={`https://sajib.xyz${location.pathname}`} />
            </Helmet>

            <main className="flex flex-col items-center justify-center pt-20 lg:pt-0 bg-[#0f1629] text-white min-h-screen">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-red-600">404</h1>
                    <p className="text-2xl mt-4 font-semibold">Oops! Page not found.</p>
                    <p className="text-gray-400 mt-2">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </main>
        </>
    );
}
