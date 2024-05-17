import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function TalkInput({ createTalk }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');
  const bodyRef = useRef(null);

  function createTalkHandler(event) {
    event.preventDefault();
    createTalk(title, category, body);
    setBody('');
    bodyRef.current.textContent = '';
  }

  function onBodyChangeEventHandler() {
    setBody(bodyRef.current.textContent);
  }

  return (
    <div className="add-talk-page">
      <form className="talk-input">
        <input
          className="mb-3 input-title"
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Judul"
        />
        <input
          className="mb-3 input-category"
          type="text"
          value={category}
          onChange={onCategoryChange}
          placeholder="Kategori"
        />
        <div
          className="mb-3 input-body"
          contentEditable="true"
          onInput={onBodyChangeEventHandler}
          ref={bodyRef}
        />
      </form>
      <button onClick={createTalkHandler} type="button" className="btn btn-warning add-talk-submit">
        Posting
      </button>
    </div>
  );
}

TalkInput.propTypes = {
  createTalk: PropTypes.func.isRequired,
};

export default TalkInput;
