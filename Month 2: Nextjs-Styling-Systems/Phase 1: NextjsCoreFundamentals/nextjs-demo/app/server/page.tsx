export const dynamic = 'force-dynamic'; // disable SSG

export default async function ServerPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store', // forces SSR
    });

    const users = await res.json();

    return (
        <>
            <h2>Server-Rendered Users</h2>
            <ul>
                {users.slice(0, 5).map((u:any) => {
                    <li key={u.id}>{u.name}</li>
                })}
            </ul>
        </>
    )
}