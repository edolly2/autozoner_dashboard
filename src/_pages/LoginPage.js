import "./LoginPage.css";

import LoginComponent from "../_components/LoginComponent";
import PageTitle from "../_components/PageTitle";

const LoginPage = () => {
  return (
    <div className="page">
      <header>
        <PageTitle titleText="Employee Dashboard Login" />
      </header>
      <div className="login-form">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
