import React from 'react';
import InputForm from '../components/page/input_form';
import OutputForm from '../components/page/output_form';

const MainPage = () => {
    return (
        <div className='main-page-container'>
            <div className="main-page-container-forms text-center">
                <InputForm/>
                <OutputForm/>
            </div>
        </div>
    );
};

export default MainPage;
