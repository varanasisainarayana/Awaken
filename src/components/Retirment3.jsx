import React, { useState } from 'react';

const Retirment3 = () => {

  return (
    <div className='flex items-start justify-start flex-col mt-[50%]'>
      <h1 className='text-3xl font-semibold my-[1%]'>Retirement - Accumulation</h1>
      <form className='flex flex-row md:w-[80vh]'>
        <div className={`flex flex-col mr-[10%] w-[100%] `}>
          <h5 className='text-xl font-medium my-2'>Valuation of Investments and Assets meant for Retirement</h5>
                  <div className='flex flex-col justify-between gap-5 py-[5%]'>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='existing_investments' className='flex mt-[1%] mr-2 text-lg '>Existing Investments in EPF, PPF, NPS etc.:</label>
                        <input type='number' id='existing_investments' name='existing_investments' placeholder='Enter'  className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                         <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='annual_contribution' className='flex mt-[1%] mr-2 text-lg '>Annual Contribution:</label>
                        <input type='number' id='annual_contribution' name='annual_contribution' placeholder='Enter age'  className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='expected_average_return' className='flex mt-[1%] mr-2 text-lg '>Expected Average Return in EPF, PPF, NPS etc. (%):</label>
                        <input type='number' id='expected_average_return' name='expected_average_return' placeholder='Enter age'  className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='corpus_at_retirement' className='flex mt-[1%] mr-2 text-lg '>Value of this Corpus at Retirement:</label>
                        <input type='number' id='corpus_at_retirement' name='corpus_at_retirement' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='net_property_asset' className='flex mt-[1%] mr-2 text-lg '>Net value of property/Asset earmarked for this goal:</label>
                        <input type='number' id='net_property_asset' name='net_property_asset' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='expected_return_property' className='flex mt-[1%] mr-2 text-lg '>Expected return on property/asset (%):</label>
                        <input type='number' id='expected_return_property' name='expected_return_property' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='property_at_retirement' className='flex mt-[1%] mr-2 text-lg '>Value of Property/Asset at Retirement:</label>
                        <input type='number' id='property_at_retirement' name='property_at_retirement' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='value_shares_mfs' className='flex mt-[1%] mr-2 text-lg '>Value of Shares and MFs meant for retirement:</label>
                        <input type='number' id='value_shares_mfs' name='value_shares_mfs' placeholder='Enter age' className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='expected_return_shares_mfs' className='flex mt-[1%] mr-2 text-lg w-[77%]'>Expected Return on Shares and MFs meant for Retirement (%):</label>
                        <input type='number' id='expected_return_shares_mfs' name='expected_return_shares_mfs' placeholder='Enter' className='text-lg border border-[#1dbe72] placeholder:text-center w-[23%] mr-[2%] p-[1%]  mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='value_shares_mfs_retirement' className='flex mt-[1%] mr-2 text-lg '>Value of Shares and MFs at Retirement:</label>
                        <input type='number' id='value_shares_mfs_retirement' name='value_shares_mfs_retirement' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      
                  </div>
        </div>
      </form>
    </div>
  );
};

export default Retirment3;