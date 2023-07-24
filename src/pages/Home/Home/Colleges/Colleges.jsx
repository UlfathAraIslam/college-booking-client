import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    const displayColleges = colleges.slice(0, 3);

    return (
        <div>
            <div>
                <h3 className='text-3xl text-center bg-blue-600 text-primary-content'>Our Colleges</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        displayColleges.map(college => <CollegeCard
                            key={college._id}
                            college={college}
                        ></CollegeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Colleges;