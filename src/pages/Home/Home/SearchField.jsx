import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchField = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-full max-w-sm mx-auto mt-4 mb-4">
            <div className='relative'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
                    placeholder="Search for colleges..."

                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                    <FaSearch className="h-5 w-5 text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default SearchField;
