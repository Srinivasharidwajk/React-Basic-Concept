import React, {useState} from 'react';
import ChildCard from "./ChildCard";
import NavbarHeading from '../../NavbarHeading';

const ParentCard:React.FC = () => {

    const [parentText, setParentText] = useState<string>("Iam from parent");
    const [fromChild, setFromChild] = useState<string>("");

    const findData = (value:string):void => {
       setFromChild(value);
    };

    return (
        <>
        <NavbarHeading navbarName='React Component interaction Parent To Child'/>
           <div className="card p-5 m-5">
           <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
           
                        <h1>Basic Component Interaction Concept</h1>
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <pre>Parent Card</pre>
                                <pre>From Child : {fromChild}</pre>
                                <ChildCard parentText={parentText} findData={findData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
export default ParentCard;
