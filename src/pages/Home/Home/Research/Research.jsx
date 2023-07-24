import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Research = () => {
    return (
        <div>
            <h2 className='text-center text-3xl m-4 bg-blue-600 rounded text-primary-content'>Some Research Paper Link</h2>
            <div className='flex gap-6 m-10'>
                <div className='text-center text-2xl'>
                    <h1>MLA Research Paper</h1>
                    <a target='_blank' href="https://collegeessay.org/blog/research-paper-example/mla-research-paper-sample.pdf"><img style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/7YbGpt9/research-sample.png" alt="" /><FaDownload/></a>
                </div>
                <div className='text-center text-2xl'>
                    <h1>Harvard Research Paper</h1>
                    <a target='_blank' href="https://collegeessay.org/blog/how-to-write-a-research-paper/research-paper-example">
                    <img style={{ width: '400px', height: '400px' }} src="https://i.ibb.co/vsxBfBY/research-sample1.png" alt="" /><FaDownload/>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Research;