import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRAL_VOTE_THREAD: 'TOGGLE_NEUTRAL_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

// untuk menambahkan thread
function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

// untuk voting up
function toggleUpVoteActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

// untuk voting down
function toggleDownVoteActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralVoteActionCreator(threadId, userId) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, category, body }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const addThread = await api.createThread({ title, category, body });
      dispatch(addThreadActionCreator(addThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleUpVote(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleUpVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleDownVote(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleDownVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

function asyncToogleNeutralVote(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleNeutralVoteActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleNeutralVote(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralVoteActionCreator({ threadId, userId: authUser.id }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteActionCreator,
  toggleDownVoteActionCreator,
  asyncAddThread,
  asyncToogleUpVote,
  asyncToogleDownVote,
  asyncToogleNeutralVote,
};
