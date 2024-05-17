import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addComment }) {
  const [comment, setComment] = useState('');
  const commentRef = useRef(null);

  function addCommentHandler(event) {
    event.preventDefault();
    addComment(comment);
    setComment('');
    commentRef.current.textContent = '';
  }

  function onCommentChangeEventHandler(event) {
    setComment(event.target.value);
  }

  return (
    <div className="comment-input">
      <h3>Beri Komentar</h3>
      <form>
        <div className="mb-3 input-field">
          <textarea
            className="form-control"
            value={comment}
            onChange={onCommentChangeEventHandler}
            ref={commentRef}
          />
        </div>
        <button
          type="button"
          onClick={addCommentHandler}
          className="btn btn-warning add-comment-submit"
        >
          Reply
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
