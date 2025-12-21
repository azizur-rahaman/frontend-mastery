import { clearAuth } from "@/lib/persist";
import { logout } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function NavBar() {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const signOut = () => {
        clearAuth();
        dispatch(logout());
        router.push('/logout');
    }

    return (
        <nav style={{padding:12, borderBottom: '1px solid #ddd'}}>
            <button onClick={signOut}>
                Logout
            </button>
        </nav>
    )
} 