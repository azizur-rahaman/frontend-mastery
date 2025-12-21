import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/test-utils';
import { server } from '@/mocks/server';
import { rest } from 'msw';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Delete User Rollback', () => {
  it('rolls back UI when delete fails', async () => {
    // Force API failure
    server.use(
      rest.delete('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<DashboardPage />, {
      preloadedState: {
        auth: { user: 'testuser', token: 'testtoken' },
      },
    });

    const user = await screen.findByText('John Doe');
    await userEvent.click(screen.getByRole('button', { name: /delete/i }));

    // User disappears optimistically
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();

    // Rollback happens
    expect(await screen.findByText('John Doe')).toBeInTheDocument();
  });
});
