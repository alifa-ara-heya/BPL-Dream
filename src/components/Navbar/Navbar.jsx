import PropTypes from 'prop-types';

import logo from "../../assets/logo.png";
import coin from '../../assets/coin.png'

const Navbar = ({coins}) => {
    return (
        <header className="w-11/12 mx-auto max-w-7xl">
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        {/* <img src="../../assets/logo.png" alt="" /> */}
                        {/* <img src="/src/assets/logo.png"  alt="" /> */}
                        <img src={logo} className="h-12" alt="cricket logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="px-4 py-2 bg-transparent border-gray-200 border-2 hover:bg-transparent hover:outline-none flex items-center rounded-xl cursor-default font-bold"><span className="mr-2 ">{coins}</span> Coin <img src={coin} alt="coin" /></button>
                </div>
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    coins: PropTypes.number.isRequired
};

export default Navbar;