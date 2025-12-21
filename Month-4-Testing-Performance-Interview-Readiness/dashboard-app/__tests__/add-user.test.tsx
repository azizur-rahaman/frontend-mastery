import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/test-utils';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Add User Mutation', () => {
  it('adds a new user and updates the UI', async () => {
    renderWithProviders(<DashboardPage />, {
      preloadedState: {
        auth: { user: 'testuser', token: 'testtoken' },
      },
    });

    // Wait for initial user
    expect(await screen.findByText('John Doe')).toBeInTheDocument();

    // Fill form
    await userEvent.type(screen.getByPlaceholderText(/name/i), 'Jane Smith');
    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'jane@test.com'
    );

    // Submit
    await userEvent.click(screen.getByRole('button', { name: /add/i }));

    // New user appears
    expect(await screen.findByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@test.com')).toBeInTheDocument();
  });
});
