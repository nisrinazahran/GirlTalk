import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigate({ signOut }) {
  return (
    <nav className="navbar">
      <div className="text-logo">
        <h1>
          Girl&apos;s
          <span className="talk">Talk</span>
        </h1>
      </div>
      <div className="navlink">
        <ul>
          <li>

            <Link className="nav-link active" aria-current="page" to="/">
              Thread 
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/leaderboards">
              Leaderboard
            </Link>
          </li>
          <li>
            <button onClick={() => signOut()} type="button" className="btn btn-link">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navigate.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigate;