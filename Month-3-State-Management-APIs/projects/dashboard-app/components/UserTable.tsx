import { User } from "@/lib/types/user";
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from "@/store/api";

export default function UserTable() {
    const {data, isLoading, isError, error, refetch} = useGetUsersQuery();
    const [updateUser, {isLoading: isUpdating}] = useUpdateUserMutation();
    const [deleteUser, {isLoading: isDeleting}] = useDeleteUserMutation();
    if(isLoading){
        return <p>Loading users...</p>
    };

    if(isUpdating){
        return <p>User Updating...</p>;
    }

    if(isDeleting) {return <p>Deleting user..</p>;}

    if(isError){
        return(
            <div>
                <p>Error loading users</p>
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );
    };

    if(!data || data.length === 0){
        return <p>No users found!</p>
    };

    const editUser = (user: User) => {
        updateUser({
            ...user,
            name: user.name + '+(edited)'
        })
    }

    return (
        <div>
            <h2>Users</h2>
            <button onClick={() => refetch()} style={{ marginBottom: 12}}>Refresh</button>

{/*      <table border={1} cellPadding={8} cellSpacing={0} width="100%">
*/}
            <table border={1} cellPadding={8} cellSpacing={0} width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <button
                                onClick={() => editUser(user)}
                                >Edit
                                </button>
                                
                                <button
                                    onClick={()=> deleteUser(user.id)}
                                    style={{marginLeft: 8}}
                                    >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}