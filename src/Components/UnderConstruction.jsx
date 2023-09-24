import React from 'react';
import UnderConstructionLogo from '../construction.svg';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">Page Under Construction</h1>
      <img src={UnderConstructionLogo} alt="Construction Logo" className="w-2/3 md:w-1/3 lg:w-1/4 mb-8" />
      <Link to="/" className="text-blue-500 hover:underline font-bold">Go to home page</Link>
    </div>
  );
};

export default UnderConstruction;
