import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
  AiOutlineDislike,
} from 'react-icons/ai';

function Vote({
  id,
  upVote,
  downVote,
  neutralVote,
  upVotesBy,
  downVotesBy,
}) {
  const [voted, setVoted] = useState(null);

  const handleVote = (type) => {
    if (voted === type) {
      setVoted(null);
      return type === 'up' ? neutralVote(id) : neutralVote(id);
    } 
    setVoted(type);
    return type === 'up' ? upVote(id) : downVote(id);
  };

  return (
    <>
      <button
        type="button"
        className="talk-upVote"
        onClick={() => handleVote('up')}
      >
        {voted === 'up' ? <AiFillLike /> : <AiOutlineLike />}
        <span className="vote-button_upvotes">{upVotesBy.length}</span>
      </button>
      <button
        type="button"
        className="talk-downVote"
        onClick={() => handleVote('down')}
      >
        {voted === 'down' ? <AiFillDislike /> : <AiOutlineDislike />}
        <span className="vote-button_downvotes">{downVotesBy.length}</span>
      </button>
    </>
  );
}

Vote.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Vote;