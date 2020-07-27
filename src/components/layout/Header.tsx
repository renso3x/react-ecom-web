import React from 'react';
import { navigate } from 'gatsby';
import { logout } from '../../services/token';

export interface Props {

}

const Header: React.SFC<Props> = () => {
  const doLogout = () => {
    logout(() => {
      navigate('/signin');
    });
  }

  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">El France</a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <button type="button" className="mt-1 btn btn-light"  onClick={doLogout}>Sign out</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;