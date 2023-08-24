import React, {useState} from 'react';

interface IProps{
    parentText : string;
    sendData : (value:string) => void;
}

const ChildForm:React.FC<IProps> = (props) => {

    const [childText, setChildText] = useState<string>("");

    const updateInput = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setChildText(event.target.value);
        props.sendData(event.target.value); // sending data to parent
    };

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-light text-white">
                                <form>
                                    <input
                                        value={childText}
                                        onChange={e => updateInput(e)}
                                        type="text" className="form-control" placeholder={'enter child text here'}/>
                                </form>
                                <pre className='text-dark '>{props.parentText}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ChildForm;
