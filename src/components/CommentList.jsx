import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { ownerShape } from './TalkDetail';

function CommentList({ 
  comments, 
  upVoteComment, 
  downVoteComment, 
  neutralVoteComment,
}) {
  return (
    <div className="comment-list">
      <h4>
        Comments(
        {comments.length}
        )
      </h4>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralVote={neutralVoteComment}
        />
      ))}
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
};

export default CommentList;
