import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const { user, LogOut } = useContext(AuthContext)

    const handelLogOut = () => {
        LogOut()
        .then(() => { })
        .catch(error => console.error(error))
    }

    return (
        <div>
           <div className="navbar bg-primary text-white font-semibold">
                <a className="btn btn-ghost normal-case text-xl">Auth-FireBase</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                { user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span> : <button 
                        onClick={handelLogOut} className="btn btn-xs">Sing Out</button>
                    </> : <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;