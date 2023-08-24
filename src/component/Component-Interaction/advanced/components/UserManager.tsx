import React, {useState} from 'react';
import UserTable from "./UserTable";
import UserCard from "./UserCard";
import {IUser} from "../models/IUser";

const UserManager:React.FC = () => {

    const [user, setUser] = useState<IUser>({} as IUser);

    const receiveUser = (user:IUser):void => {
        setUser(user);
    };

    return (
        <>
           <div className="card p-5 m-5">
           <div className="container mt-3">
           <h1>Advance Component Interaction Concepts</h1>
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">User Data with Component Interaction </p>
                        <p>The componenet interaction with three components  "Table componenet" to  "Home componenet" to "Card componenet"</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquid architecto dolorem et explicabo quaerat reprehenderit. Eos ipsum laudantium magni officia vero voluptas voluptatum? Alias delectus dolor eos minima modi nobis perspiciatis praesentium quae velit vitae! Corporis nam porro vel!</p>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-9">
                        <UserTable sendUser={receiveUser}/>
                    </div>
                    <div className="col-sm-3">
                        <UserCard user={user}/>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}
export default UserManager;
