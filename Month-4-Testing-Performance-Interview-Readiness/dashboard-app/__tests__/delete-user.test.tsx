import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/test-utils';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Delete User (Optimistic)', () => {
  it('removes user immediately from UI', async () => {
    renderWithProviders(<DashboardPage />, {
      preloadedState: {
        auth: { user: 'testuser', token: 'testtoken' },
      },
    });

    const userRow = await screen.findByText('John Doe');
    expect(userRow).toBeInTheDocument();

    // Click delete
    await userEvent.click(
      screen.getByRole('button', { name: /delete/i })
    );

    // Optimistic update → user disappears immediately
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});
