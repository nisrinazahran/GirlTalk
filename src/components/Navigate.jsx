import React from 'react';
import PropTypes from 'prop-types';

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
            <a className="nav-link active" aria-current="page" href="/">
              Thread
            </a>
          </li>
          <li>
            <a className="nav-link" href="/leaderboards">
              Leaderboard
            </a>
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