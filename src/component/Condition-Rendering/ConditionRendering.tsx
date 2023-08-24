import React, { useState } from 'react'
import NavbarHeading from '../NavbarHeading';

const ConditionRendering:React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginUser, setLoginUser] = useState("SrinivasHaridwaj");

    const login = () => {
        setIsLoggedIn(true);
    };

    const logOut = () => {
        setIsLoggedIn(false);
    };

    const displayWelcomeCard = (name:string) => {
        return (
            <div className="card bg-light">
                <div className="card-body">
                    <p className="h3 text-success">Hello! {name}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque aut beatae consequuntur cumque delectus dolorum excepturi illum ipsam laborum obcaecati quidem, quisquam reprehenderit rerum saepe soluta suscipit vel velit?</p>
                </div>
            </div>
        )
    };

    const displayLogoutCard = (name:string) => {
        return (
            <div className="card bg-light">
                <div className="card-body ">
                    <p className="h3 text-primary">GoodBye! {name}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis corporis debitis delectus doloremque eius iure minus modi molestiae natus nemo quod tenetur vel, vero voluptatibus. Enim inventore veniam voluptatibus.</p>
                </div>
            </div>
        )
    };

    return (
        <>
        <NavbarHeading navbarName='React Condition Rendering'/>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="mb-2">
                            {
                                isLoggedIn ?
                                    <button className="btn btn-primary" onClick={logOut}>LogOut</button> :
                                    <button className="btn btn-success" onClick={login}>Login</button>
                            }
                        </div>
                        {
                            (isLoggedIn) ? displayWelcomeCard(loginUser) : displayLogoutCard(loginUser)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConditionRendering