/**
 * skenario isPreload reducer
 *
 * - isPreloadReducer function
 * - should return the initial state when given by unknown action
 * - should return false when given by SET_IS_PRELOAD action
 */

import { describe, expect, it } from 'vitest';
import isPreloadReducer from './reducer';

describe('isPreload reducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = true;
    const action = { type: 'UNKNOWN' };

    // action
    const newState = isPreloadReducer(initialState, action);

    // assert
    expect(newState).toBe(initialState);
  });

  it('should return false when given by SET_IS_PRELOAD action', () => {
    // arrange
    const initialState = true;
    const action = { type: 'SET_IS_PRELOAD', payload: { isPreload: false } };

    // action
    const newState = isPreloadReducer(initialState, action);

    // assert
    expect(newState).toBe(false);
  });
});
