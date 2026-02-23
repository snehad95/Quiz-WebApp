import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/api";

export default function UserProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
  });

  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  // Load existing profile
  useEffect(() => {
    API.get("/api/auth/profile")
      .then((res) => {
        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          bio: res.data.bio || "",
        });
        setLoading(false);
      })
      .catch(() => {
        alert("Not authorized");
        navigate("/Login");
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put("/api/auth/profile", form);
      setMsg("Profile updated successfully!");
    } catch {
      alert("Failed to update profile");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-3">User Profile</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-control mb-3"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Email (readonly)</label>
        <input
          className="form-control mb-3"
          value={form.email}
          disabled
        />

        <label>Phone</label>
        <input
          className="form-control mb-3"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <label>About You</label>
        <textarea
          className="form-control mb-3"
          rows="3"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">Save Profile</button>

        {msg && <p className="text-success mt-2 text-center">{msg}</p>}

        <button
          type="button"
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={() => navigate("/course-content")}
        >
          Go To Courses
        </button>
      </form>
    </div>
  );
}