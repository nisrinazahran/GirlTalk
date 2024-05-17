import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import Vote from './Vote';

function TalkDetail({
  id,
  title,
  body,
  createdAt,
  owner,
  upVoteDetail,
  downVoteDetail,
  neutralVoteDetail,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <>
      <div className="user-info-detail">
        <img src={owner.avatar} alt={owner.name} />
        <p className="talkItem-user">
          <strong>{owner.name}</strong>
        </p>
      </div>
      <div className="talk-detail">
        <div className="talk-detail-content">
          <header className="talk-item-header">
            <h4 className="talk-item-title">{title}</h4>
            <span className="talk-item-time">{postedAt(createdAt)}</span>
          </header>
          <div className="talk-item-body">{body}</div>
          <footer className="talk-item-footer">
            <Vote
              id={id}
              upVote={upVoteDetail}
              downVote={downVoteDetail}
              upVotesBy={upVotesBy}
              downVotesBy={downVotesBy}
              neutralVote={neutralVoteDetail}
            />
          </footer>
        </div>
      </div>
    </>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

TalkDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteDetail: PropTypes.func.isRequired,
  downVoteDetail: PropTypes.func.isRequired,
  neutralVoteDetail: PropTypes.func.isRequired,
};

export { ownerShape };

export default TalkDetail;