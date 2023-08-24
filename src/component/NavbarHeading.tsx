import React from 'react'
interface IProps{
    navbarName:string;
}

const NavbarHeading:React.FC <IProps> = (props) => {
  return (
    <>
<div className="">
<nav className="navbar bg-primary p-4 ">
  <div className="container-fluid ">
    <span className="navbar-brand text-white  ">{props.navbarName}</span>
  </div>
</nav>
</div>
    
    </>
  )
}

export default NavbarHeading;
