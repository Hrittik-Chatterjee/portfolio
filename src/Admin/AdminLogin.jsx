import { FaUser, FaLock } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLogin = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
 

  const from =  "/adminportal";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <FaUser style={styles.icon} />
          <input
            type="email"
            placeholder="Username"
            name="email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <FaLock style={styles.icon} />
          <input
            type="password"
            placeholder="Password"
            name="password"
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#ffffff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    borderBottom: "1px solid black",
  },
  icon: {
    marginRight: "10px",
    color: "black",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    color: "black",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default AdminLogin;
