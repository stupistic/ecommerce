import "./Register.css";

const Register = () => {
  return (
    <div className="reg-Container">
      <div className="reg-Wrapper">
        <div>
        <h1 className="reg-Title">CREATE AN ACCOUNT</h1>
        <form className="reg-Form">
          <input className="reg-Input" placeholder="name" />
          <input className="reg-Input" placeholder="last name" />
          <input className="reg-Input" placeholder="username" />
          <input className="reg-Input" placeholder="email" />
          <input className="reg-Input" type='password' placeholder="password" />
          <input className="reg-Input" type='password' placeholder="confirm password" />
          <span className="reg-Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="reg-Button" type="submit">CREATE</button>
        </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
