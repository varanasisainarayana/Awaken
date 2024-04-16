import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import Main from './main';
import Form from './form';

function App() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className='fixed w-full md:w-[30%] h-[10%] md:h-full'>
        <Main></Main>
      </div>
      <div className='w-full md:ml-[30%] md:w-[70%] h-[90%0] md:h-full'>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;