import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Main from './main';
import Form from './form';
import logo from './IMG_5409.png';
import footer from './IMG_5410.png';
import { useReactToPrint } from 'react-to-print';
import React from 'react';


function App() {
   const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="flex flex-col gap-16">
      {/* <div className='fixed w-full md:w-[30%] h-[10%] md:h-full'>
        <Main></Main>
      </div>
      <div className='w-full md:ml-[30%] md:w-[70%] h-[90%0] md:h-full'>
        <Form></Form>
      </div> */}
      <div className="flex w-[100%] flex-col gap-5 px-5" ref={componentRef}>
      <img src={logo} className='w-[100%] h-[10%] m-auto' />
      <h1 className='text-black text-center text-6xl pb-10'>Report</h1>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Name</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Gender</h1>
        <h1 className='text-black text-xl w-[30%]'>: Male</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Current Age of Applicant</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Maritial Status</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Spouse Name</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Current Age of Spouse</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Retirement Age of of Applicant</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Age of Spouse at the Time of Applicant's Retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Life Expectancy of Applicant</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Life Expectancy of Spouse</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Inflation for this Goal (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Period Left</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Monthly Retirement Expenses @ Current Cost</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Inflation Adjusted Amount at Retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Monthly Income from Reverse Mortgage (only indicative)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Monthly income requirement at retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Number of Years for which Income is Required</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Return on Portfolio Post Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Inflation Post Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Retirement Corpus Needed</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Existing Investments in EPF, Super Annuation, PPF, NPS etc.</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Annual Contribution</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Average Return in EPF, Super Annuation, PPF, NPS etc. (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Value of this Corpus at Retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Net value of property/Asset earmarked for this goal</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected return on property/asset (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Value of Property/Asset at Retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Value of Shares and MFs meant for retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Return on Shares and MFs meant for Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Value of Shares and MFs at Retirement</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Balance of Corpus to be Accumulated</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Monthly SIP Required</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Expected Annual Increase in Monthly Investment (%)</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Monthly SIP Amount with Topup @ 10% Per Annum</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[60%]'>Lump sum</h1>
        <h1 className='text-black text-xl w-[30%]'>: Sai</h1>
      </div>
      <img src={footer} className='w-[100%] h-[10%] m-auto' />
      </div>
      <button onClick={handlePrint} className='bg-[#1dbe72] text-white text-3xl p-5 w-[30%] rounded-md m-auto'>Download</button>
    </div>
  );
}

export default App;