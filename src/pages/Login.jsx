/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Login.css"

const Login=()=>{
    return(
        <div className="login-Container">
      <div className="login-Wrapper">
        <div>
        <h1 className="login-Title">SIGN-IN</h1>
        <form className="login-Form">
          <input className="login-Input" placeholder="username" />
          <input className="login-Input" type='password' placeholder="password" />
          <button className="login-Button">LOGIN</button>
          <a className="login-Link">DO YOU NOT REMEMBER YOUR PASSWORD</a>
          <a className="login-Link">CREATE NEW ACCOUNT</a>
        </form>
        </div>
      </div>
    </div>
    )
}
export default Login;