/**
 * skenario leaderboard component
 *
 * - LeaderboardItem component
 * - should renders correctly with given props
 */

import React from 'react';
import { 
  describe, 
  it, 
  assert, 
  afterEach, 
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import LeaderboardItem from './LeaderboardItem';

describe('LeaderboardItem component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should renders correctly with given props', async () => {
    // arrange
    const user = {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
      score: 100,
    };

    // action
    render(<LeaderboardItem {...user} />);

    // assert
    assert.equal(screen.getByText('John Doe').textContent, 'John Doe');
  });
});
