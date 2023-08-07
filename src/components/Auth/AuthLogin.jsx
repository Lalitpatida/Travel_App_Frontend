import "./Auth.css";

export const AuthLogin=()=>{
    return (
     <div className="auth-container">
        <form>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label"> Mobile Number<span className="asterisk">*</span></label>
                <input className="auth-input" 
                placeholder="Enter Mobile Number"
                type="number"
                maxLength={10}
                required></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Password<span className="asterisk">*</span></label>
                <input className="auth-input"
                 placeholder="Enter Password"
                 type="password"
                 required></input>
            </div>
            <div>
                <button className="button btn-primary btn-login cursor">Login</button>
            </div>
        </form>
        <div className="cta">
        <button
          className="button btn-outline-primary cursor-pointer"
        //   onClick={handleTestCredentialsClick}
        >
          Login with Test Credentials
        </button>
      </div>
     </div>
    );
    
};