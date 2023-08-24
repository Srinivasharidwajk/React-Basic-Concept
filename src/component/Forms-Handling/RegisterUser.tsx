
import React, {useState} from 'react';
import NavbarHeading from '../NavbarHeading';

interface IUser{
    username : string;
    email : string;
    password : string;
    designation : string;
    gender : string;
    bio : string;
    terms : boolean;
}


const RegisterUser:React.FC = () => {

    const [user, setUser] = useState<IUser>({
        username : "",
        email : "",
        password : "",
        designation : "",
        gender : "",
        bio : "",
        terms : false
    });

    const updateInput = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, key:string) => {
        setUser({
            ...user,
            [key] : event.target.value
        });
    };


    const updateCheck = (event:React.ChangeEvent<HTMLInputElement>, key:string) => {
        setUser({
            ...user,
            [key] : event.target.checked
        });
    };

    const checkEmptyFields = () => {
        for(let value of Object.values(user)){
            if(value === ""){
                return true;
            }
        }
        return false;
    };

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user); // send user to server
    };


    return (
        <>
        <NavbarHeading navbarName='React Registration Form '/>
            <pre>{JSON.stringify(user)}</pre>
           <div className="card p-5">
           <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">Registration</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={e => handleSubmit(e)}>
                                    <div className="mb-2">
                                        <input
                                            value={user.username}
                                            onChange={(e) => updateInput(e , 'username')}
                                            type="text" className="form-control"
                                               placeholder="Username"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            value={user.email}
                                            onChange={e => updateInput(e, 'email')}
                                            type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            value={user.password}
                                            onChange={(e) => updateInput(e , 'password')}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="mb-2">
                                        <select
                                            value={user.designation}
                                            onChange={(e) => updateInput(e , 'designation')}
                                            className="form-control">
                                            <option value="">Select Designation</option>
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                                            <option value="Tech Lead">Tech Lead</option>
                                            <option value="Manager">Manager</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-check-label px-2 ">Select Gender</label>
                                        <input
                                            onChange={e => updateInput(e, 'gender')}
                                            type="radio" className="form-check-input" name="gender" value={'Male'}/>
                                            <label className="form-check-label px-2">Male</label>
                                        <input 
                                             onChange={e => updateInput(e, 'gender')}
                                             type="radio" className="form-check-input" name="gender" value={"Female"}/>
                                             <label className="form-check-label px-2">Female</label>
                                    </div>
                                    <div className="mb-2">
                                        <textarea
                                            value={user.bio}
                                            onChange={e => updateInput(e, 'bio')}
                                            className="form-control" rows={3} placeholder="Bio"></textarea>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            onChange={e => updateCheck(e, 'terms')}
                                            type="checkbox" className="form-check-input"/>
                                            <label className="form-check-label px-3">Accepts Terms & Conditions</label>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" value="Register" disabled={!user.terms || checkEmptyFields()} className="btn btn-primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
export default RegisterUser;
