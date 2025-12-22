import { User } from "@/lib/types/user";
import { memo } from "react";


interface Props {
    user: User;
    onEdit: (user: User) => void;
    onDelete: (userId: number) => void;
}


function UserRow({ user, onEdit, onDelete } : Props) {
    console.log("Rendering UserRow for user:", user.id);

    return (
        <tr>
            <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
        </tr>
    )
}

export default memo(UserRow);