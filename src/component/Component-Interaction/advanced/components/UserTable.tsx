import React, {useState} from 'react';
import {IUser} from "../models/IUser";
import {UserService} from "../services/UserService";

interface IProps{
    sendUser : (user:IUser) => void
}

const UserTable:React.FC<IProps> = (props) => {
    const [userList, setUserList] = useState<IUser[]>(UserService.getAllUsers());

    const clickUser = (user:IUser) => {
        props.sendUser(user);
    };

    return (
        <>
            <table className="table table-hover text-center table-striped shadow-lg">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>SNO</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>For More Details</th>
                    </tr>
                </thead>
                <tbody>
                {
                    userList.length > 0 && userList.map(user => {
                        return (
                            <tr key={user.login.uuid} onClick={() => clickUser(user)}>
                                <td>{user.login.uuid.substring(user.login.uuid.length - 5)}</td>
                                <td>
                                    <img src={user.picture.large} alt="" width={50} height={50}/>
                                </td>
                                <td>{user.name.first} {user.name.last}</td>
                                <td>{user.dob.age} yrs</td>
                                <td>{user.email}</td>
                                <td>{user.location.country}</td>
                                <td><button className='btn btn-primary text-white'>Click</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    );
}
export default UserTable;
