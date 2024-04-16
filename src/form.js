import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import LifeExpect from './components/LifeExpect';
import Retirment1 from './components/Retirment1';
import Retirment2 from './components/Retirment2';
import Retirment3 from './components/Retirment3';

const Form = () => {

    const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


    return (
        <div className="flex flex-col m-auto pl-5 md:pl-0 md:p-5 md:mb-10 bg-white w-full md:h-[100vh] items-center justify-center">
            {step === 1 && <PersonalInfo />}
            {step === 2 && <LifeExpect />}
            {step === 3 && <Retirment1 />}
            {step === 4 && <Retirment2 />}
            {step === 5 && <Retirment3 />}
            <div className='flex flex-row w-[60%] pb-10'>
                {step > 1 && <input type='button' value='Previous' onClick={handlePrevious} className='border-2 border-[#1dbe72] text-black hover:bg-[#1dbe72] hover:text-white text-lg p-[1%] px-[8%] mt-[5%] mr-[40%] rounded-md cursor-pointer' />}
                <input type='submit' value='Next' onClick={handleNext} className={`flex border-2 border-[#1dbe72] text-black hover:bg-[#1dbe72] hover:text-white text-lg p-[1%] px-[8%] mt-[5%] rounded-md cursor-pointer ${step === 1 ? 'ml-[75%]' : ''}`} />
             </div>
        </div>
    );
};

export default Form;