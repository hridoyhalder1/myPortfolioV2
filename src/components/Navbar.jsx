import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center mx-5'>
            <div className="navbar  w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Project</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar hidden lg:flex ml-[-200px] ">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Project</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src='/public/img/search.png' className='w-6 mr-5 cursor-pointer'></img>
                    <a className="btn bg-[#da4ea2] text-white hover:bg-[#da4ea2]">Hire Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;