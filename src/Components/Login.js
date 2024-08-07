// Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Validate values before showing the pop-up
    if (
      isValidEmail(email) &&
      isValidPhone(phone) &&
      isValidUsername(username) &&
      isValidPassword(password)
    ) {
      setShowPopup(true);
      // Clear any previous validation errors
      setEmailError('');
      setPhoneError('');
      setUsernameError('');
      setPasswordError('');
    } else {
      setEmailError(isValidEmail(email) ? '' : 'Please enter a valid email address.');
      setPhoneError(isValidPhone(phone) ? '' : 'Please enter a valid phone number.');
      setUsernameError(getUsernameError(username));
      setPasswordError(isValidPassword(password) ? '' : 'Password must be at least 6 characters.');
    }
  };

  const closePopup = () => {
    // Set state to hide the pop-up
    setShowPopup(false);
  };

  const isValidEmail = (email) => {
    // Simple email validation check
    return email.includes('@');
  };

  const isValidPhone = (phone) => {
    // Simple phone validation check
    return /^[0-9]{10}$/.test(phone); // Assumes a 10-digit phone number
  };

  const isValidUsername = (username) => {
    // Simple username validation check
    return username.trim() !== '';
  };

  const getUsernameError = (username) => {
    // Additional constraints for the username
    if (username.length < 3) {
      return 'Username must be at least 3 characters.';
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return 'Username can only contain letters and numbers.';
    }
    return '';
  };

  const isValidPassword = (password) => {
    // Simple password validation check
    return password.length >= 6;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="login-container p-4 shadow-lg rounded">
            <h2 className="text-center mb-4">Login</h2>
            <label>
              Email:
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <p className="text-danger">{emailError}</p>}
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
              {phoneError && <p className="text-danger">{phoneError}</p>}
            </label>
            <br />
            <label>
              Username:
              <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
              {usernameError && <p className="text-danger">{usernameError}</p>}
            </label>
            <br />
            <label>
              Password:
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              {passwordError && <p className="text-danger">{passwordError}</p>}
            </label>
            <br />
            <button className="btn btn-primary mt-3" onClick={handleLogin}>
              Login
            </button>

            {/* Conditional rendering for the pop-up */}
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={closePopup}>&times;</span>
                  <h2>Entered Credentials:</h2>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                  <p>Username: {username}</p>
                  <p>Password: {password}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
