import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '@/app/login/page';
import { renderWithProviders } from '@/test-utils';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Login Page', () => {
  it('allows user to log in', async () => {
    renderWithProviders(<LoginPage />);

    const input = screen.getByPlaceholderText(/username/i);
    const button = screen.getByRole('button', { name: /login/i });

    await userEvent.type(input, 'admin');
    await userEvent.click(button);

    expect(input).toHaveValue('admin');
  });
});
