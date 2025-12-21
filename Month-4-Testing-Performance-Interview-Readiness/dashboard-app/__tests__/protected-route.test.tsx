import { screen } from '@testing-library/react';
import ProtectedRoute from '@/components/ProtectedRoute';
import { renderWithProviders } from '@/test-utils';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('ProtectedRoute', () => {
  it('blocks access when not logged in', () => {
    renderWithProviders(
      <ProtectedRoute>
        <div>Secret Content</div>
      </ProtectedRoute>
    );

    expect(screen.queryByText('Secret Content')).not.toBeInTheDocument();
  });
});
