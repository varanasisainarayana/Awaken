import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Main from './main';
import Form from './form';
import logo from './IMG_5409.png';
import footer from './IMG_5410.png';
import { useReactToPrint } from 'react-to-print';
import BarChart from './barchart';

// rest of your code


function App() {
  const componentRef = React.useRef();
  const location = useLocation();

  const [showHide, setshowHide] = useState("hidden")

 const handlePrint = useReactToPrint({
    
    content: () => componentRef.current,
 });
  
  
  const handlePrint2 = () => {
    setshowHide("flex");

    setTimeout(() => {
      handlePrint();
    }, 1000);

    setTimeout(() => {
      setshowHide("hidden");
    }
    , 2000);
    
  }

 

  const query = new URLSearchParams(location.search);
  const name = query.get('name');
  const gender = query.get('gender');
  const age = query.get('age');
  const maritialstatus = query.get('maritialstatus');
  const spouseName = query.get('spousename');
  const spouseAge = query.get('spouseage');
  const retirementAge = query.get('retirementage');
  const retirementSpouseAge = query.get('retirementSpouseAge');
  const lifeExpectancy = query.get('lifeExpectancy');
  const spouseLifeExpectancy = query.get('spouseLifeExpectancy');
  const ExpectedInflationGoal = query.get('ExpectedInflationGoal');
  const periodLeft = query.get('periodLeft');
  const monthlyRetirementCost = query.get('monthlyRetirementCost');
  const infulationAdjustedAmount = query.get('infulationAdjustedAmount');
  const monthlyIncomeReverseMortgage = query.get('monthlyIncomeReverseMortgage');
  const monthlyIncomeRequirement = query.get('monthlyIncomeRequirement');
  const numberYearsIncomeRequired = query.get('numberYearsIncomeRequired');
  const expectedReturnPortfolio = query.get('expectedReturnPortfolio');
  const expectedInflationRetirement = query.get('expectedInflationRetirement');
  const retirementCorpus = query.get('retirementCorpus');
  const investmentsEPF = query.get('investmentsEPF');
  const annualContribution = query.get('annualContribution');
  const expectedAverageEPF = query.get('expectedAverageEPF');
  const corpusatRetirement = query.get('corpusatRetirement');
  const netValueProperty = query.get('netValueProperty');
  const expectedReturnProperty = query.get('expectedReturnProperty');
  const valueOfProperty = query.get('valueOfProperty');
  const valueOfSharesForRetirement = query.get('valueOfSharesForRetirement');
  const expectedReturnOnShares = query.get('expectedReturnOnShares');
  const valueOfShares = query.get('valueOfShares');
  const balanceOfCorpusAccumulated = query.get('balanceOfCorpusAccumulated');
  const monthlySIP = query.get('monthlySIP');
  const expectedAnnualIncreaseInMonthlyInvestment = query.get('expectedAnnualIncreaseInMonthlyInvestment');
  const monthlySIPPerAnnum = query.get('monthlySIPPerAnnum');
  const lumpSum = query.get('lumpSum');
  


  return (
    <div className="flex flex-col gap-16">
      {/* <div className='fixed w-full md:w-[30%] h-[10%] md:h-full'>
        <Main></Main>
      </div>
      <div className='w-full md:ml-[30%] md:w-[70%] h-[90%0] md:h-full'>
        <Form></Form>
      </div> */}
      <div className={`flex w-[100%] justify-center flex-col `}>
        <div className='header'>
          <img src={logo} className='w-[100%] h-[10%] m-auto' />
          </div>
        <div className='flex flex-col items-center justify-end px-[10%] w-[100%]'>
      <h1 className='text-black text-center text-5xl pb-10'>Report</h1>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Name</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'>{name}</h1>
      </div>
      {/* <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Gender</h1>
          <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> { gender }</h1>
      </div> */}
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Current Age of Applicant</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {age}</h1>
      </div>
      {/* <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Maritial Status</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {maritialstatus}</h1>
      </div> */}
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Spouse Name</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseName}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Current Age of Spouse</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Retirement Age of of Applicant</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Age of Spouse at the Time of Applicant's Retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementSpouseAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Life Expectancy of Applicant</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {lifeExpectancy}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Life Expectancy of Spouse</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseLifeExpectancy}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Inflation for this Goal (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {ExpectedInflationGoal}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Period Left</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {periodLeft}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly Retirement Expenses @ Current Cost</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyRetirementCost}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Inflation Adjusted Amount at Retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {infulationAdjustedAmount}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Monthly Income from Reverse Mortgage (only indicative)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyIncomeReverseMortgage}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly income requirement at retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyIncomeRequirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Number of Years for which Income is Required</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {numberYearsIncomeRequired}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Return on Portfolio Post Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnPortfolio}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Inflation Post Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedInflationRetirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Retirement Corpus Needed</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementCorpus}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Existing Investments in EPF, Super Annuation, PPF, NPS etc.</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {investmentsEPF}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Annual Contribution</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {annualContribution}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Average Return in EPF, Super Annuation, PPF, NPS etc. (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedAverageEPF}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of this Corpus at Retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {corpusatRetirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Net value of property/Asset earmarked for this goal</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {netValueProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected return on property/asset (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Property/Asset at Retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Shares and MFs meant for retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfSharesForRetirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Return on Shares and MFs meant for Retirement (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnOnShares}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Shares and MFs at Retirement</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfShares}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Balance of Corpus to be Accumulated</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {balanceOfCorpusAccumulated}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly SIP Required</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlySIP}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Annual Increase in Monthly Investment (%)</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedAnnualIncreaseInMonthlyInvestment}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly SIP Amount with Topup @ 10% Per Annum</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlySIPPerAnnum}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-xl w-[70%] border border-black px-[3%] py-[0.3%] border-r-0'>Lump sum</h1>
        <h1 className='text-black text-xl w-[30%] border border-black px-[2%] py-[0.3%] font-medium'> {lumpSum}</h1>
      </div>
          <div className='flex flex-col items-center justify-center w-[70%] my-[5%]'>
            <h1 className='text-2xl font-bold my-[2%]'>Retirement - Accumulation</h1>
          <BarChart></BarChart>
          </div>
        </div>
        <div className='footer'>
          <img src={footer} className='w-[100%] h-[10%] m-auto' />
          </div>
      </div>
      <button onClick={handlePrint2} className='bg-[#1dbe72] text-white text-2xl p-5 w-[30%] rounded-md m-auto'>Download PDF</button>
      <div className={`${showHide} w-[100%] justify-center flex-col `} ref={componentRef}>
        <div className='header'>
          <img src={logo} className='w-[100%] h-[5%] m-auto' />
          </div>
        <div className='flex flex-col items-center justify-end px-[10%] w-[100%]'>
      <h1 className='text-black text-center text-5xl pb-5'>Report</h1>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Name</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'>{name}</h1>
      </div>
      {/* <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Gender</h1>
          <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> { gender }</h1>
      </div> */}
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Current Age of Applicant</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {age}</h1>
      </div>
      {/* <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Maritial Status</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {maritialstatus}</h1>
      </div> */}
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Spouse Name</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseName}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Current Age of Spouse</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Retirement Age of of Applicant</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Age of Spouse at the Time of Applicant's Retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementSpouseAge}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Life Expectancy of Applicant</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {lifeExpectancy}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Life Expectancy of Spouse</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {spouseLifeExpectancy}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Inflation for this Goal (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {ExpectedInflationGoal}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Period Left</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {periodLeft}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly Retirement Expenses @ Current Cost</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyRetirementCost}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Inflation Adjusted Amount at Retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {infulationAdjustedAmount}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Monthly Income from Reverse Mortgage (only indicative)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyIncomeReverseMortgage}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly income requirement at retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlyIncomeRequirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Number of Years for which Income is Required</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {numberYearsIncomeRequired}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Return on Portfolio Post Retirement (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnPortfolio}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Inflation Post Retirement (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedInflationRetirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Retirement Corpus Needed</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {retirementCorpus}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Existing Investments in EPF, Super Annuation, PPF, NPS etc.</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {investmentsEPF}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Annual Contribution</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {annualContribution}</h1>
          </div>
        
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%]  border-b-0 border-r-0'>Expected Average Return in EPF, Super Annuation, PPF, NPS etc. (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedAverageEPF}</h1>
          </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-r-0'>Value of this Corpus at Retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] font-medium'> {corpusatRetirement}</h1>
          </div>
          </div>
         <div className='footer mt-[2%]'>
          <img src={footer} className='w-[100%] h-[10%] m-auto' />
        </div>
        <div className='header'>
          <img src={logo} className='w-[100%] h-[5%] m-auto' />
          </div>
        <div className='flex flex-col items-center justify-end pt-[5%] px-[10%] w-[100%]'>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Net value of property/Asset earmarked for this goal</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {netValueProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected return on property/asset (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Property/Asset at Retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfProperty}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Shares and MFs meant for retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfSharesForRetirement}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Return on Shares and MFs meant for Retirement (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedReturnOnShares}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Value of Shares and MFs at Retirement</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {valueOfShares}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Balance of Corpus to be Accumulated</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {balanceOfCorpusAccumulated}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly SIP Required</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlySIP}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Expected Annual Increase in Monthly Investment (%)</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {expectedAnnualIncreaseInMonthlyInvestment}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-b-0 border-r-0'>Monthly SIP Amount with Topup @ 10% Per Annum</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] border-b-0 font-medium'> {monthlySIPPerAnnum}</h1>
      </div>
      <div className='flex flex-row justify-between w-full'>
        <h1 className='text-black text-lg w-[70%] border border-black px-[3%] py-[0.3%] border-r-0'>Lump sum</h1>
        <h1 className='text-black text-lg w-[30%] border border-black px-[2%] py-[0.3%] font-medium'> {lumpSum}</h1>
      </div>
          <div className='flex flex-col items-center justify-center w-[85%] mt-[5%]'>
            <h1 className='text-2xl font-bold my-[2%]'>Retirement - Accumulation</h1>
          <BarChart></BarChart>
          </div>
        </div>
        <div className='footer mt-[5%]'>
          <img src={footer} className='w-[100%] h-[10%] m-auto' />
          </div>
      </div>
    </div>
  );
}

export default App;