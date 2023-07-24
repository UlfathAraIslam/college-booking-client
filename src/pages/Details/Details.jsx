import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const college = useLoaderData();
    console.log(college);
    const { college_name, college_image, admission_process, events_details, research_works, sports_categories } = college;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <h2 className="text-4xl font-bold mb-2 mt-10 text-center">{college_name}</h2>
                <img src={college_image} className="mb-4 w-full" />
                <div className='m-10'>

                    <p className="text-gray-600 mb-2"><span className='font-bold'>Admission Process:</span>  {admission_process}</p>
                    <p className="text-gray-600 mb-2"><span className='font-bold'>Event Details:</span></p>
                    <ul className="list-disc list-inside">
                        {Object.entries(events_details).map(([eventName, eventDetails]) => (
                            <li key={eventName}>
                                {`${eventName}: Date ${eventDetails.Date}, Theme '${eventDetails.Theme}'`}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-600 mb-2"><span className='font-bold'>Research Works:</span></p>
                    <ul className="list-disc list-inside">
                        {research_works.map((work, index) => (
                            <li key={index}>{work}</li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mb-2"><span className='font-bold'>Sports Categories:</span></p>
                    <ul className="list-disc list-inside">
                        {sports_categories.map((category, index) => (
                            <li key={index}>
                                <strong>Category:</strong> {category.category}<br />
                                <strong>Team Count:</strong> {category.team_count}<br />
                                <strong>Coaches:</strong> {category.coaches.join(', ')}<br />
                                <strong>Practice Schedule:</strong> {category.practice_schedule}<br />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Details;