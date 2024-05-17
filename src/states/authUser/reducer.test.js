/**
 * skenario authUser reducer
 *
 *  - authUserReducer function
 *  - should return initialState when given by unknown action
 *  - should return null when given by authUser/unset action 
 *  - should return user when given by authUser/set action 
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer function', () => {
  it('should return initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(initialState);
  });

  it('should return null when given by authUser/unset action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.UNSET_AUTH_USER,
      payload: {
        authUser: null,
      },
    };

    // action
    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toBeNull();
  });

  it('should return user when given by authUser/set action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };

    // action
    const nextstate = authUserReducer(initialState, action);

    // assert
    expect(nextstate).toEqual(action.payload.authUser);
  });
});
