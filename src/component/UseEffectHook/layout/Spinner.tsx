import React from 'react';
import spinnerImg from "../../../asserts/Image/spinner.gif";

const Spinner:React.FC = () => {
    return (
        <>
            <div className="loading-spinner">
                <img src={spinnerImg} alt=""/>
            </div>
        </>
    );
}
export default Spinner;
