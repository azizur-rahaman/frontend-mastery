import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/test-utils';
import { server } from '@/mocks/server';
import { http, HttpResponse } from 'msw';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Delete User Rollback', () => {
  it('rolls back UI when delete fails', async () => {
    // Force API failure
    server.use(
      http.delete('https://jsonplaceholder.typicode.com/users/:id', () => {
        return HttpResponse.error();
      })
    );

    renderWithProviders(<DashboardPage />);

    const user = await screen.findByText('John Doe');
    await userEvent.click(screen.getByRole('button', { name: /delete/i }));

    // User disappears optimistically
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();

    // Rollback happens
    expect(await screen.findByText('John Doe')).toBeInTheDocument();
  });
});
