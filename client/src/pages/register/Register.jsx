import { useRef, useState } from "react";
import "./register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <div className="loginButton">Sign In</div>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more. </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to cerate or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="text" placeholder="email address" ref={emailRef} />
            <button onClick={handleStart} className="registerButton">
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={handleFinish} className="registerButton">
              Get Started
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
