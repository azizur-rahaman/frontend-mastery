import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/test-utils';
import UserTable from '@/components/UserTable';

describe('Users Table', () => {
  it('renders users from API', async () => {
    renderWithProviders(<UserTable />);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@test.com')).toBeInTheDocument();
  });
});
