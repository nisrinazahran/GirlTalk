import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteCommentThreadDetail,
  asyncDownVoteCommentThreadDetail,
  asyncNeutralVoteCommentThreadDetail,
  asyncAddCommentThreadDetail,
} from '../states/threadDetail/action';

import TalkDetail from '../components/TalkDetail';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';

function DetailPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const { threadDetail } = useSelector((states) => states);
  const { authUser } = useSelector((states) => states);

  const onUpVoteThreadHandler = () => {
    dispatch(asyncUpVoteThreadDetail(id));
  };

  const onDownVoteThreadHandler = () => {
    dispatch(asyncDownVoteThreadDetail(id));
  };

  const onNeutralVoteThreadHandler = () => {
    dispatch(asyncNeutralVoteThreadDetail(id));
  };

  const onAddCommentHandler = (content) => {
    dispatch(asyncAddCommentThreadDetail({ threadId:id, content }));
  };

  const onUpVoteCommentHandler = () => {
    dispatch(asyncUpVoteCommentThreadDetail({ threadId:id, commentId:id }));
  };

  const onDownVoteCommentHandler = () => {
    dispatch(asyncDownVoteCommentThreadDetail({ threadId:id, commentId:id }));
  };

  const onNeutralVoteCommentHandler = () => {
    dispatch(asyncNeutralVoteCommentThreadDetail({ threadId:id, commentId:id }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <>
      <TalkDetail
        {...threadDetail}
        authUser={authUser}
        upVoteDetail={onUpVoteThreadHandler}
        downVoteDetail={onDownVoteThreadHandler}
        neutralVoteDetail={onNeutralVoteThreadHandler}
      />
      <div className="thread-comment">
        <CommentInput addComment={onAddCommentHandler} authUser={authUser} />
        <CommentList
          comments={threadDetail.comments}
          upVoteComment={onUpVoteCommentHandler}
          downVoteComment={onDownVoteCommentHandler}
          neutralVoteComment={onNeutralVoteCommentHandler}
        />
      </div>
    </>
  );
}

export default DetailPage;
