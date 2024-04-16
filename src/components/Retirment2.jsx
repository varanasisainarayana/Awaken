import React, { useState } from 'react';

const Retirment2 = () => {

  return (
    <div className='flex items-start justify-start flex-col'>
      <h1 className='text-3xl font-semibold my-[1%]'>Retirement - Accumulation</h1>
      <form className='flex flex-row md:w-[80vh]'>
        <div className={`flex flex-col mr-[10%] w-[100%] `}>
          <h5 className='text-xl font-medium my-2'>Calculation of Retirement Corpus</h5>
                  <div className='flex flex-col justify-between gap-5 py-[5%]'>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='years_income_required' className='flex mt-[1%] mr-2 text-lg '>Number of Years for which Income is Required:</label>
                        <input type='number' id='years_income_required' name='years_income_required'  value={50} readOnly placeholder='Enter Number' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                         <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='expected_return' className='flex mt-[1%] mr-2 text-lg '>Expected Return on Portfolio Post Retirement (%):</label>
                        <input type='number' id='expected_return' name='expected_return' placeholder='Enter number'className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='expected_inflation' className='flex mt-[1%] mr-2 text-lg '>Expected Inflation Post Retirement (%):</label>
                        <input type='number' id='expected_inflation' name='expected_inflation' placeholder='Enter number' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='retirement_corpus_needed' className='flex mt-[1%] mr-2 text-lg '>Retirement Corpus Needed:</label>
                        <input type='number' id='retirement_corpus_needed' name='retirement_corpus_needed' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                  </div>
        </div>
      </form>
    </div>
  );
};

export default Retirment2;