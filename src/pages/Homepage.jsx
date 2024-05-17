import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  asyncAddThread,
  asyncToogleUpVote,
  asyncToogleDownVote,
  asyncToogleNeutralVote,
} from '../states/threads/action';
import TalkInput from '../components/TalkInput';
import TalkList from '../components/TalkList';
import Category from '../components/Category';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function Homepage() {
  const authUser = useSelector((states) => states.authUser);
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onCreateTalkHandler = (title, category, body) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  const onUpVoteHandler = (id) => {
    dispatch(asyncToogleUpVote(id));
  };

  const onDownVoteHandler = (id) => {
    dispatch(asyncToogleDownVote(id));
  };

  const onNeutralVoteHandler = (id) => {
    dispatch(asyncToogleNeutralVote(id));
  };

  const categories = threads
    .map((thread) => `#${thread.category}`)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser === null ? authUser : authUser.id,
  }));

  return (
    <>
      <TalkInput createTalk={onCreateTalkHandler} authUser={authUser} />
      <Category categories={categories} />
      <TalkList
        threads={threadList}
        upVote={onUpVoteHandler}
        downVote={onDownVoteHandler}
        neutralVote={onNeutralVoteHandler}
      />
    </>
  );
}

export default Homepage;
