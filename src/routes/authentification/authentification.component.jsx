import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentification.styles.scss";

const Authentification = () => {
  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentification;
