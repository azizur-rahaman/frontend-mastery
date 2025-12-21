import { rest } from 'msw';

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
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.json(users));
  }),

  // POST add user
  rest.post('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => {
    const body = await req.json() as Record<string, unknown>;
    const newUser = { id: Date.now(), ...body } as User;
    users.push(newUser);
    return res(ctx.status(201), ctx.json(newUser));
  }),

  // DELETE user
  rest.delete('https://jsonplaceholder.typicode.com/users/:id', (req, res, ctx) => {
    users = users.filter((u) => u.id !== Number(req.params.id));
    return res(ctx.status(200), ctx.json({}));
  }),
];
