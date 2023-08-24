import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">React Concepts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link text-white" href="#">Home</a>
        <a className="nav-link text-white" href="#">Features</a>
        <a className="nav-link text-white" href="#">Pricing</a>
        <a className="nav-link text-white" href='#'>Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar