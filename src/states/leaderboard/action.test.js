/**
 * skenario test
 *
 *  - asyncGetLeaderboards Thunk
 *  - should dispatch action correctly when fetching data successs
 *  - should dispatch action and call alert correctly when fetching data failed
 */

import {
  describe, 
  beforeEach, 
  afterEach, 
  it, 
  vi, 
  expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncGetLeaderboards, receiveLeaderboardsActionCreator } from './action';

const fakeLeaderboardResponse = [
  {
    user: {
      id: 'methread-users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncGetLeaderboards Thunk', () => {
  beforeEach(() => {
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api._getLeaderboards = api.getLeaderboards;

    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when fetching data successs', async () => {
    // arrange
    // stub implementation

    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncGetLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when fetching data failed', async () => {
    // arrange
    // stub implementation
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncGetLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
