import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
  ADD_COMMENT_THREAD: 'ADD_COMMENT_THREAD',
  UP_VOTE_COMMENT_THREAD: 'UP_VOTE_COMMENT_THREAD',
  DOWN_VOTE_COMMENT_THREAD: 'DOWN_VOTE_COMMENT_THREAD',
  NEUTRAL_VOTE_COMMENT_THREAD: 'NEUTRAL_VOTE_COMMENT_THREAD',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralVoteDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentThreadActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT_THREAD,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT_THREAD,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_THREAD,
    payload: {
      userId,
      commentId,
    },
  };
}

function toggleNeutralVoteCommentActionCreator({ userId, commentId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT_THREAD,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteDetailActionCreator({ userId: authUser.id }));

    try {
      await api.toggleUpVote(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteDetailActionCreator({ userId: authUser.id }));

    try {
      await api.toggleDownVote(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleNeutralVoteDetailActionCreator({ userId: authUser.id }));

    try {
      await api.toggleNeutralVote(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddCommentThreadDetail({ threadId, content = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const addComment = await api.createCommentThreads({ threadId, content });
      dispatch(addCommentThreadActionCreator(addComment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteCommentThreadDetail( threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.commentUpVote(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteCommentThreadDetail(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.commentDownVote(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteCommentThreadDetail(threadId, commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleNeutralVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.commentNeutralVote(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteDetailActionCreator,
  toggleDownVoteDetailActionCreator,
  addCommentThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
  asyncNeutralVoteCommentThreadDetail,
};
