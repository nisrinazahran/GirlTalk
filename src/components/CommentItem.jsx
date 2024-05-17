import React from 'react';
import PropTypes from 'prop-types';
import Vote from './Vote';
import { postedAt } from '../utils';
import { ownerShape } from './TalkDetail';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVote,
  downVote,
  neutralVote,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div className="comment-item">
      <header className="own-profile-comment">
        <div className="name-owner">
          <img src={`${owner.avatar}`} alt={owner.name} />
          <p className="comment-owner">
            <strong>{owner.name}</strong>
          </p>
        </div>
        <p className="createdAt">{postedAt(createdAt)}</p>
      </header>
      <div className="talk-item-body">{content}</div>
      <footer className="talk-item-footer">
        <Vote
          id={id}
          upVote={upVote}
          downVote={downVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          neutralVote={neutralVote}
        />
      </footer>
    </div>
  );
}

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  neutralVote: PropTypes.func,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
};

CommentItem.propTypes = {
  ...commentItemShape,
};

CommentItem.defaultProps = {
  upVote: null,
  downVote: null,
  neutralVote: null,
};

export default CommentItem;
