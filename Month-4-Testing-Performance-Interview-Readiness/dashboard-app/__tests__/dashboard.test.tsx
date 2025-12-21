import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test-utils';
import DashboardPage from '@/app/dashboard/page';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Dashboard Page', () => {
  it('renders dashboard with user data', async () => {
    renderWithProviders(<DashboardPage />, {
      preloadedState: {
        auth: { user: 'testuser', token: 'testtoken' },
      },
    });

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@test.com')).toBeInTheDocument();
  });
});
