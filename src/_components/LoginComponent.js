import "./LoginComponent.css";
const LoginComponent = () => {
  return (
    <div className="login-container">
      <form className="login-form">
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
          <a href="/">Dont have an account?</a>
        </div>
        <button type="submit" className="login-form-submit-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
