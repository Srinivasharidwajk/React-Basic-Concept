import React, {useState} from 'react';
import ChildForm from "./ChildForm";

const ParentForm:React.FC = () => {

    const [parentText, setParentText] = useState<string>("");
    const [cText, setCText] = useState<string>("");

    const updateInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setParentText(event.target.value);
    };

    const getData = (value:string):void => {
        setCText(value);
    };

    return (
        <>
           <div className="card p-5 m-5">
           <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-5">
                    <h1>Intermediate Component Interaction Concept</h1>
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <form>
                                    <input
                                        value={parentText}
                                        onChange={e => updateInput(e)}
                                        type="text" className="form-control" placeholder={'enter parent text here'}/>
                                </form>
                                <pre>{cText}</pre>
                                <ChildForm parentText={parentText} sendData={getData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
export default ParentForm;
