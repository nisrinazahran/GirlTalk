import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReachLink } from 'react-router-dom';
import { BiComment } from 'react-icons/bi';
import { Link } from '@chakra-ui/react';
import Vote from './Vote';
import { postedAt } from '../utils';

function TalkItem({
  id,
  title,
  body,
  category,
  createdAt,
  user,
  totalComments,
  upVote,
  downVote,
  neutralVote,
  upVotesBy,
  downVotesBy,
}) {
  return (
    <div className="talk-item">
      <header className="talk-item-header">
        <h4>
          <Link
            as={ReachLink}
            to={`/threads/${id}`}
            className="talk-item-title"
          >
            {title}
          </Link>
        </h4>
        <span className="talk-item-time">{postedAt(createdAt)}</span>
      </header>
      <div className="talk-item-body">
        {body}
      </div>
      <footer className="talk-item-footer">
        <div className="talk-item-vote">
          <Vote
            id={id}
            upVote={upVote}
            downVote={downVote}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            neutralVote={neutralVote}
          />
          <p className="talk-total-comments">
            <BiComment size={20} />
            {' '}
            {totalComments} Comments
          </p>
        </div>
        <div className="talkItem-user-info">
          <img src={user.avatar} alt={user.name} />
          <p className="talkItem-user">
            Dibuat Oleh
            {' '}
            <strong>{user.name}</strong>
          </p>
        </div>
        <p className="category">
          #
          {category}
        </p>
      </footer>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const talkItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number.isRequired,
};

TalkItem.propTypes = {
  ...talkItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

TalkItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { talkItemShape };

export default TalkItem;
