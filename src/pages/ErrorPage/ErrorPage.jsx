import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content md:flex-row space-y-5 md:space-y-0 md:space-x-10">
        <div className="md:max-w-sm text-center md:text-left">
        </div>
        <div className="md:w-96 w-full">
          <img src='https://i.ibb.co/jvRK0Ds/oops-404-error-with-broken-robot-concept-illustration-114360-1932.jpg' alt="Error Illustration" className="w-full" />
          <Link
            to="/"
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-all duration-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
