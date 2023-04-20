import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {} = useContext(AuthContext)

    return (
        <div>
           <div className="navbar bg-primary text-white font-semibold">
                <a className="btn btn-ghost normal-case text-xl">Auth-FireBase</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;