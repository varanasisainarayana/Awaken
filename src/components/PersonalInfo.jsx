import React, { useEffect, useState } from 'react';

const PersonalInfo = () => {

  const [maritalStatus, setMaritalStatus] = useState('single');
   const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [DOB, setDOB] = useState('');
  // const [maritalStatus, setMaritalStatus] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [spouseGender, setSpouseGender] = useState('');
  const [spouseDOB, setSpouseDOB] = useState('');

  // Save to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('gender', gender);
    localStorage.setItem('DOB', DOB);
    localStorage.setItem('maritalStatus', maritalStatus);
    localStorage.setItem('spouseName', spouseName);
    localStorage.setItem('spouseGender', spouseGender);
    localStorage.setItem('spouseDOB', spouseDOB);
  }, [name, gender, DOB, maritalStatus, spouseName, spouseGender, spouseDOB]);


  return (
    <div className='flex items-start justify-start flex-col'>
      <h1 className='text-3xl font-semibold my-2'>Personal Information</h1>
      <form className='flex flex-row w-[80vh]'>
        <div className={`flex flex-col mr-[10%] ${maritalStatus === 'single' ? 'w-[100%]' : 'w-[50%]'} `}>
          <h5 className='text-xl font-medium my-2'>Head of Family</h5>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' placeholder='Enter your name' className='text-lg border border-[#1dbe72] w-full p-[2%] mt-[1%]' />
            <div className='flex flex-col my-2'>
              <label className='flex mb-[1%]'>Gender:</label>
              <div className='flex flex-row'>
                <label className='flex mr-5'>
                  <input type="radio" value="Male" name="gender" className='w-5 mr-2'/> Male
                </label>
                <label className='flex mx-3'>
                  <input type="radio" value="Female" name="gender" className='w-5 mr-2'/> Female
                </label>
              </div>
            </div>
            <label htmlFor='DOB'>Date of Birth:</label>
            <input type='date' id='DOB' name='DOB'  className='text-lg border border-[#1dbe72] w-full p-[2%] mt-[1%]' />
            <div className='flex flex-col my-2'>
              <label className='flex mb-[1%]'>Merital Status:</label>
              <div className='flex flex-row'>
                <label className='flex mr-3'>
                  <input type="radio" value="single" name="meritalStatus" className='w-5 mr-2'onChange={(e) => setMaritalStatus(e.target.value)}/> Single
                </label>
                <label className='flex mx-3'>
                  <input type="radio" value="married" name="meritalStatus" className='w-5 mr-2'onChange={(e) => setMaritalStatus(e.target.value)}/> Married
                </label>
              </div>
            </div>
          </div>
        </div>
        {maritalStatus === 'married' && (
        <div className='flex flex-col w-[50%]'>
          <h5 className='text-xl font-medium my-[3%]'>Spouse</h5>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='spousename' name='spousename' placeholder='Enter your name' className='text-lg border border-[#1dbe72] w-full p-[2%] mt-[1%]' />
            <div className='flex flex-col my-[3%]'>
              <label className='flex mb-[1%]'>Gender:</label>
              <div className='flex flex-row'>
                <label className='flex mr-[5%] '>
                  <input type="radio" value="Male1" name="gender1" className='w-5 mr-2'/> Male
                </label>
                <label className='flex mx-[5%]'>
                  <input type="radio" value="Female1" name="gender1" className='w-5 mr-2'/> Female
                </label>
              </div>
            </div>
            <label htmlFor='DOB'>Date of Birth:</label>
            <input type='date' id='spouseDOB' name='spouseDOB' className='text-lg border border-[#1dbe72] w-full p-[2%] mt-[1%]' />
          </div>
          </div>
          )}
      </form>
      {/* <div className='flex w-full'>
          <input type='submit' value='Next' className='border-2 border-[#1dbe72] text-black hover:bg-[#1dbe72] hover:text-white text-lg p-[1%] px-[10%] mt-[5%] rounded-md cursor-pointer' />
      </div> */}
    </div>
  );
};

export default PersonalInfo;