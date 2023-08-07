import "./Auth.css";

export const AuthSignUp=()=>{
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
                <label className="auth-label">Name<span className="asterisk">*</span></label>
                <input className="auth-input"
                 placeholder="Enter Name"
                 required></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Email<span className="asterisk">*</span></label>
                <input className="auth-input"
                 placeholder="Enter Email"
                 type="email"
                 required></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Password<span className="asterisk">*</span></label>
                <input className="auth-input"
                 placeholder="Enter Password"
                 type="password"
                 required></input>
            </div>
            <div className="d-flex direction-column lb-in-container">
                <label className="auth-label">Confirm Password<span className="asterisk">*</span></label>
                <input className="auth-input"
                 placeholder="Confirm Password"
                 type="password"
                 required></input>
            </div>
            <div>
                <button className="button btn-primary btn-login cursor">Submit</button>
            </div>
        </form>
     </div>
    );
    
};