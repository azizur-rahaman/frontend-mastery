import { render } from '@testing-library/react';
import { renderWithProviders } from '@/test-utils';
import Navbar from '@/components/Navbar';

jest.mock('next/navigation', () => require('@/__mocks__/next-navigation'));

describe('Navbar snapshot', () => {
  it('matches snapshot', () => {
    const { container } = renderWithProviders(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
