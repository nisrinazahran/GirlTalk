import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ avatar, name, score }) {
  return (
    <div className="leaderboard-item">
      <div className="user-info">
        <img src={avatar} alt={name} />
        <h4>{name}</h4>
      </div>
      <div className="score">
        <h4>{score}</h4>
      </div>
    </div>
  );
}

LeaderboardItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
