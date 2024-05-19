/**
 * skenario testing
 *
 * - RegisInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { 
  describe, 
  it, 
  expect, 
  assert, 
  afterEach, 
  vi, 
} from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisInput from './RegisInput';

describe('RegisInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle name typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <RegisInput register={() => {}} />
      </MemoryRouter>,
    );

    const nameInput = screen.getByPlaceholderText('Enter name');

    // action
    await userEvent.type(nameInput, 'nisrina');

    // assert
    assert(nameInput.value === 'nisrina');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <RegisInput register={() => {}} />
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
        <RegisInput register={() => {}} />
      </MemoryRouter>,
    );
    const passwordInput = screen.getByPlaceholderText('Enter password');

    // Action
    await userEvent.type(passwordInput, 'test123');

    // Assert
    assert(passwordInput.value === 'test123');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegis = vi.fn();
    render(<RegisInput register={mockRegis} />);

    const nameInput = screen.getByPlaceholderText('Enter name');
    await userEvent.type(nameInput, 'nisrina');
    const emailInput = screen.getByPlaceholderText('Enter email');
    await userEvent.type(emailInput, 'nisrina@example.com');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    await userEvent.type(passwordInput, 'test123');

    // action
    const registerButton = screen.getByRole('button', { name: /register/i });
    await userEvent.click(registerButton);

    // assert
    expect(mockRegis).toBeCalledWith({
      name: 'nisrina',
      email: 'nisrina@example.com',
      password: 'test123',
    });
  });
});
