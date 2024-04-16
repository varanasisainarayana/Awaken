import React, { useEffect, useState } from 'react';

const Retirment1 = () => {

  const [income, setIncome] = useState(0);
  const [Expected_Monthly_Income, setExpected_Monthly_Income] = useState('no');
  const [DOB, setDOB] = useState('');
  const [spouseDOB, setSpouseDOB] = useState('');

  // Load from local storage when the component mounts
  useEffect(() => {
    const storedDOB = localStorage.getItem('DOB');
    const storedSpouseDOB = localStorage.getItem('spouseDOB');

    if (storedDOB) {
      setDOB(storedDOB);
    }

    if (storedSpouseDOB) {
      setSpouseDOB(storedSpouseDOB);
    }
  }, []);

  const handleRadioChange = (e) => {
    if (e.target.value === 'yes') {
      setIncome(50);
      setExpected_Monthly_Income('yes');
    } else if (e.target.value === 'no') {
      setIncome(0);
      setExpected_Monthly_Income('no');
    }
  };

  return (
    <div className='flex items-start justify-start flex-col mt-[50%]'>
      <h1 className='text-3xl font-semibold my-[1%]'>Retirement - Accumulation</h1>
      <form className='flex flex-row md:w-[80vh]'>
        <div className={`flex flex-col mr-[10%] w-[100%] `}>
          <h5 className='text-xl font-medium my-2'>Calculation of Monthly Income Requirement at Retirement</h5>
                  <div className='flex flex-col justify-between gap-5 py-[5%]'>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='UserAge' className='flex mt-[1%] mr-2 text-lg '>Current Age of Applicant:</label>
                        <input type='number' id='UserAge' name='UserAge' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                         <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='SpouseAge' className='flex mt-[1%] mr-2 text-lg '>Current Age of Spouse:</label>
                        <input type='number' id='SpouseAge' name='SpouseAge' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='RetirementAge' className='flex mt-[1%] mr-2 text-lg '>Retirement Age of Applicant:</label>
                        <input type='number' id='RetirementAge' name='RetirementAge' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='RetirementSpouseAge' className='flex mt-[1%] mr-2 text-lg '>Age of Spouse at the Time of Applicant's Retirement:</label>
                        <input type='number' id='RetirementSpouseAge' name='naRetirementSpouseAgeme' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='LifeExpectancyofApplicant' className='flex mt-[1%] mr-2 text-lg '>Life Expectancy of Applicant:</label>
                        <input type='number' id='LifeExpectancyofApplicant' name='LifeExpectancyofApplicant' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='LifeExpectancyofSpouse' className='flex mt-[1%] mr-2 text-lg '>Life Expectancy of Spouse:</label>
                        <input type='number' id='LifeExpectancyofSpouse' name='LifeExpectancyofSpouse' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='InflationforGoal' className='flex mt-[1%] mr-2 text-lg '>Expected Inflation for this Goal (%):</label>
                        <input type='number' id='InflationforGoal' name='InflationforGoal' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='PeriodLeft' className='flex mt-[1%] mr-2 text-lg '>Period Left:</label>
                        <input type='number' id='PeriodLeft' name='PeriodLeft' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='MonthlyRetirementExpenses' className='flex mt-[1%] mr-2 text-lg '>Monthly Retirement Expenses @ Current Cost:</label>
                        <input type='number' id='MonthlyRetirementExpenses' name='MonthlyRetirementExpenses' placeholder='Enter' className='text-lg border border-[#1dbe72] placeholder:text-center w-[23%] mr-[2%] p-[1%]  mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='InflationAdjustedAmount' className='flex mt-[1%] mr-2 text-lg '>Inflation Adjusted Amount at Retirement:</label>
                        <input type='number' id='InflationAdjustedAmount' name='InflationAdjustedAmount' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      <div className='flex flex-row items-center w-full justify-between'>
                        <div className='flex flex-row w-[77%] mx-2'>
                        <label htmlFor='ExpectedMonthlyIncome ' className='flex mt-[1%] mr-2 text-lg '>Expected Income from Reverse Mortgage (indicative):</label>
                        <div className='flex flex-row items-center'>
                          <label className='flex'>
                            <input type="radio" value="yes" name="Expected_Monthly_Income" className='w-4 mr-2' onChange={handleRadioChange}/> Yes
                          </label>
                          <label className='flex ml-3'>
                            <input type="radio" value="no" name="Expected_Monthly_Income" className='w-4 mr-2' onChange={handleRadioChange} defaultChecked/> No
                          </label>
                        </div>
                        </div>
                        <input type='number' id='ExpectedMonthlyIncome' name='ExpectedMonthlyIncome' value={Expected_Monthly_Income === 'yes' ? income : ''} readOnly placeholder=''  className='flex text-center text-lg border border-[#1dbe72] placeholder:text-center w-[23%] mr-[2%] p-[1%] mt-[1%]' />
                      </div>
                       <div className='flex flex-row items-center w-full justify-between'>
                        <label htmlFor='Monthlyincomerequirement' className='flex mt-[1%] mr-2 text-lg '>Monthly income requirement at retirement:</label>
                        <input type='number' id='Monthlyincomerequirement' name='Monthlyincomerequirement' placeholder='Enter age' value={50} readOnly className='text-lg border border-[#1dbe72] w-[23%] mr-[2%] p-[1%] text-center mt-[1%]' />
                      </div>
                      
                  </div>
        </div>
      </form>
    </div>
  );
};

export default Retirment1;