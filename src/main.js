import React from 'react';
import logo from './reaidywhitelogo.png';

const Main = () => {
    return (
        <div className="flex p-5 bg-[#1dbe72] w-full md:h-[100vh] ">
            <div className='logo'>
                <img src={logo} alt="Logo" className="" width={150} height={50} />
            </div>
            {/* Add your content here */}
        </div>
    );
};

export default Main;