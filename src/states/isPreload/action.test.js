/**
 * skenario test
 *
 *  - AsyncPreloadProcess thunk
 *  - should dispatch setAuthUserActionCreator when getOwnProfile API call succeess
 *  - should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call failed
 */

import { 
  describe, 
  vi, 
  it, 
  expect, 
  beforeEach, 
  afterEach, 
} from 'vitest';
import { setAuthUserActionCreator } from '../authUser/action';
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import api from '../../utils/api';

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = () => {
  throw new Error('Ups something wrong');
};

describe('AsyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile;
    delete api._getOwnProfile;
  });

  it('should dispatch setAuthUserActionCreator when getOwnProfile API call succeess', async () => {
    // arrange

    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeUsersResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });

  it('should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call failed', async () => {
    // arrange

    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
  });
});
