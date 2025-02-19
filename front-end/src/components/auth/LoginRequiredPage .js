import { Link } from "react-router-dom";

const LoginRequiredPage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center p-5">
        <h1 className="display-4 text-danger p-5">You're not logged in!</h1>
        <p className="text-muted mt-2">Please log in or register to access this feature.</p>

        <div className="mt-4 d-flex justify-content-between gap-4 w-100" style={{ maxWidth: "500px" }}>
          <Link
            to="/login"
            className="btn btn-primary w-50"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="btn btn-success w-50"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginRequiredPage;
