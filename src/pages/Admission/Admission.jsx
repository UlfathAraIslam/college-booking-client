import React, { useState } from 'react';

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCollege((prevCollege) => ({
      ...prevCollege,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    // Handle image upload and set the image in the selected college state
    // For simplicity, you can use a file input to select an image and handle it here.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the admission data here, e.g., submit it to a backend API.
    console.log('Admission Data:', selectedCollege);
  };

  return (
    <div>
      <h3 className='text-3xl text-center bg-blue-600 text-primary-content rounded'>Our Colleges for Admission</h3>
      <ul className='text-center'>
        <li onClick={() => handleCollegeClick('University of XYZ')}>University of XYZ</li>
        <li onClick={() => handleCollegeClick('ABC College of Engineering')}>ABC College of Engineering</li>
        <li onClick={() => handleCollegeClick('City University')}>City University</li>
        <li onClick={() => handleCollegeClick('Greenfield College of Arts')}>Greenfield College of Arts</li>
        <li onClick={() => handleCollegeClick('Technical Institute of Science')}>Technical Institute of Science</li>
        <li onClick={() => handleCollegeClick('Medical College of XYZ')}>Medical College of XYZ</li>
      </ul>

      {selectedCollege && (
        <form onSubmit={handleSubmit} className='text-center'>
          <label>
            Candidate Name:
            <input
              type="text"
              name="candidateName"
              value={selectedCollege.candidateName || ''}
              onChange={handleChange}
            />
          </label>
          <br />

          {/* Add other input fields similarly */}
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              value={selectedCollege.subject || ''}
              onChange={handleChange}
            />
          </label>
          <br />

          {/* Add more input fields for Candidate Email, Candidate Phone number, address, date of birth, and image field */}
          {/* Example for Candidate Email */}
          <label>
            Candidate Email:
            <input
              type="email"
              name="candidateEmail"
              value={selectedCollege.candidateEmail || ''}
              onChange={handleChange}
            />
          </label>
          <br />

          {/* Add other input fields similarly */}

          <label>
            Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Admission;
