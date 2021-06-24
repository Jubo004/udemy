import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div>
            {/* navbar start from here */}
            <nav class="navbar navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Courses</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>
            {/* navbar Ends Here */}
            {/* Search option start from here */}
            <div className="borderBox">
            <div className="box">
                <form name="search">
                    <input type="text" className="input" name="txt"
                        onmouseout="document.search.txt.value = ''" />
                </form>
                <i className="fas fa-search"></i>
                </div>
                {/* Search option end from here */}

                {/* offer container start from here */}
                <div className="discount">
                    <h1 className="Enroll">Enroll Your COurse  Today</h1>
                    <br />
                    <h2>For Free</h2>
                    <br />
                    <h2>Limited Edition</h2>
                </div>
            </div>
        </div>
    );
};

export default Header;