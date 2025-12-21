import '@testing-library/jest-dom';
import { server } from '@/mocks/server';

// Start MSW
beforeAll(() => server.listen());

// Reset handlers after each test
afterEach(() => server.resetHandlers());

// Clean up
afterAll(() => server.close());
