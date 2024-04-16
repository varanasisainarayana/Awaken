import React, { useState } from 'react';

const LifeExpect = () => {


  return (
    <div className='flex items-start justify-start flex-col'>
      <h1 className='text-3xl font-semibold my-[1%]'>Life Expectancy Information</h1>
      <form className='flex flex-row md:w-[80vh]'>
        <div className={`flex flex-col mr-[10%] w-[100%] `}>
                  <div className='flex flex-col justify-between gap-5 py-[5%]'>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='name' className='flex mt-[1%] mr-2 text-lg '>Assumed Retirement Age for Applicant:</label>
                        <input type='number' id='name' name='name' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] px-[2%] mt-[1%]' />
                      </div>
                         <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='name' className='flex mt-[1%] mr-2 text-lg '>Assumed Retirement Age for Applicant’s Spouse:</label>
                        <input type='number' id='name' name='name' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] px-[2%] mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='name' className='flex mt-[1%] mr-2 text-lg '>Assumed Life Expectancy of Applicant:</label>
                        <input type='number' id='name' name='name' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] px-[2%] mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='name' className='flex mt-[1%] mr-2 text-lg '>Assumed Life Expectancy of Applicant’s Spouse:</label>
                        <input type='number' id='name' name='name' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] px-[2%] mt-[1%]' />
                      </div>
                  </div>
        </div>
      </form>
      {/* <div className='flex w-[90%] justify-between'>
          <input type='submit' value='Previous' className='border-2 border-[#1dbe72] text-black hover:bg-[#1dbe72] hover:text-white text-lg p-[1%] px-[10%] mt-[5%] rounded-md cursor-pointer' />
          <input type='submit' value='Next' className='border-2 border-[#1dbe72] text-black hover:bg-[#1dbe72] hover:text-white text-lg p-[1%] px-[10%] mt-[5%] rounded-md cursor-pointer' />
      </div> */}
    </div>
  );
};

export default LifeExpect;