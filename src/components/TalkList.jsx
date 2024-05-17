import React from 'react';
import PropTypes from 'prop-types';
import TalkItem, { talkItemShape } from './TalkItem';

function TalkList({ 
  threads, 
  upVote, 
  downVote, 
  neutralVote,
}) {
  return (
    <div className="talk-list">
      <h3>Untuk Anda!</h3>
      {threads.map((thread) => (
        <TalkItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
        />
      ))}
    </div>
  );
}

TalkList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(talkItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default TalkList;
