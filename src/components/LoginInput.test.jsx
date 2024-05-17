/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, assert, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText('Enter email');

    // Action
    await userEvent.type(emailInput, 'nisrina@example.com');

    // Assert
    assert(emailInput.value === 'nisrina@example.com');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText('Enter password');

    // Action
    await userEvent.type(passwordInput, 'test123');

    // Assert
    assert(passwordInput.value === 'test123');
  });

  it ('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = screen.getByPlaceholderText('Enter email');
    await userEvent.type(emailInput, 'test@example.com');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    await userEvent.type(passwordInput, 'test123');

    // action
    await userEvent.click(screen.getByText('Login'));

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'test@example.com',
      password: 'test123',
    });
  });
});
