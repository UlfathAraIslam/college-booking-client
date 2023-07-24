import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
    const {college_name,college_image,admission_date,events,research_history,sports, _id} = college;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={college_image}alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <p>{admission_date}</p>
                <p><span className='font-bold'>Sports: </span>{sports}</p>
                <p><span className='font-bold'>Events: </span>{events}</p>
                <p><span className='font-bold'>Research-history: </span>{research_history}</p>
                <div className="card-actions">
                    <Link to={`/colleges/${_id}`}>
                    <button className="btn bg-blue-600 text-primary-content">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;