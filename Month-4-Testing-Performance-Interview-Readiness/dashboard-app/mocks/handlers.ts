import { http, HttpResponse } from 'msw';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

let users: User[] = [
  { id: 1, name: 'John Doe', username: 'john', email: 'john@test.com' },
];

export const handlers = [
  // GET users
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(users);
  }),

  // POST add user
  http.post('https://jsonplaceholder.typicode.com/users', async ({ request }) => {
    const body = await request.json() as Record<string, unknown>;
    const newUser = { id: Date.now(), ...body } as User;
    users.push(newUser);
    return HttpResponse.json(newUser, { status: 201 });
  }),

  // DELETE user
  http.delete('https://jsonplaceholder.typicode.com/users/:id', ({ params }) => {
    users = users.filter((u) => u.id !== Number(params.id));
    return HttpResponse.json({}, { status: 200 });
  }),
];
