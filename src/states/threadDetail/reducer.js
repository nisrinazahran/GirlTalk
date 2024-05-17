import { ActionType } from './action';

function detailThreadReducer(detailThread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy.concat(action.payload.userId),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.downVotesBy.concat(action.payload.userId),
      };
    case ActionType.NEUTRAL_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        neutralVotesBy: detailThread.neutralVotesBy.includes(action.payload.userId)
          ? detailThread.neutralVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.neutralVotesBy.concat(action.payload.userId),
      };
    case ActionType.ADD_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };
    case ActionType.UP_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
                ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
                : detailThread.upVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
                ? detailThread.downVotesBy.filter((id) => id !== action.payload.userId)
                : detailThread.downVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };

    case ActionType.NEUTRAL_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              neutralVotesBy: detailThread.neutralVotesBy.includes(action.payload.userId)
                ? detailThread.neutralVotesBy.filter((id) => id !== action.payload.userId)
                : detailThread.neutralVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };

    default:
      return detailThread;
  }
}

export default detailThreadReducer;
