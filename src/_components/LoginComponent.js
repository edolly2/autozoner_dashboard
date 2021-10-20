import "./LoginComponent.css";

import PageTitle from "./PageTitle";

const LoginComponent = () => {
  return (
    // <div className="login-container">
    <form className="login-form">
      <PageTitle titleText="Employee Dashboard Login" />
      <br />
      <div className="label-group">
        <label htmlFor="login-username">Employee ID:</label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          placeholder="Employee ID"
        />
      </div>
      <div className="label-group">
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          placeholder="********"
        />
      </div>
      <div className="login-form-link-container">
        <a href="/">Forgot your password?</a>
        <a href="/">Don't have an account?</a>
      </div>
      <div className="login-form-submit-btn-container">
        <button type="submit" className="btn login-form-submit-btn">
          Login
        </button>
      </div>
    </form>
    // </div>
  );
};

export default LoginComponent;
