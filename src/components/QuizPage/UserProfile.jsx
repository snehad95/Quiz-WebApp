import { useEffect, useState } from "react";
import API from "../../api/api";

export default function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        API.get("/api/auth/profile")
        .then(res => setUser(res.data))
        .catch(() => alert("not authorized"));
    }, []);

    if(!user) return <p>Loading...</p>;

    return (
        <div className="container mt-5">

            <h2>Student Profile</h2>

            <div className="card p-4 shadow">
                <p><b>Name:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Role:</b> {user.role}</p>

            </div>

        </div>
    );
}