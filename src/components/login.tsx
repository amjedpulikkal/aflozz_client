import React, { FormEvent, useRef } from 'react';
import "../assets/css/sign-style.css";
import "../assets/css/lorder.css";
import LoginAnimations from './loginAnimations'; // Import the LoginAnimations component
import ReCAPTCHA from "react-google-recaptcha";
import axiosInstance from '../assets/axiosInstance'

{/* <script src="https://www.google.com/recaptcha/enterprise.js?render=6LfQp0gpAAAAAHWlFahzqCPEfZI3xe5xaPCQRs4G"></script> */ }


const login: React.FC = () => {

  const reCaptchaRef = useRef<ReCAPTCHA>(null);;


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const token = await reCaptchaRef.current.executeAsync()

    let data = {
      Email: e.target.Email.value,
      Password: e.target.Password.value,
      token
    }

    const res:any = await axiosInstance.post('/login', data)

    console.log(res);
    const { token: authToken } = res
    localStorage.setItem('token', authToken)
    const res1 = await axiosInstance.get('/cart', {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json' // Optional additional headers
      }
    })

    console.log(res1);
  }


  return (
    <div className='mainOne'>
      <ReCAPTCHA
        sitekey={'6LfQp0gpAAAAAHWlFahzqCPEfZI3xe5xaPCQRs4G'}
        size="invisible"
        ref={reCaptchaRef}
      />
      <div className="main">
        <LoginAnimations />
        <div className="container1 a-container" id="a-container">
          <form className="form1" id="b-form" action="/login" onSubmit={handleSubmit} method="post">
            <h4 className="form_title title">Sign in to Aflozz</h4>
            <input className="form__input" type="email" placeholder="Email" name="Email" />
            <p style={{ color: 'red', marginInlineStart: '-222px' }} id="le_err"></p>
            <input className="form__input" type="password" placeholder="Password" name="Password" />
            <p style={{ color: 'red', marginInlineStart: '-222px' }} id="lp_err"></p>
            <a className="form__link" href="/forgot/password">Forgot your password?</a>
            <input className="form__button button" type="submit" id="b-sub" value="SIGN IN" />
            <div className="button lorder lorder-hidden" id="b-spinner">
              <div className="dot-pulse">
                <div className="dot-pulse__dot"></div>
              </div>
            </div>
          </form>
        </div>
        <div className="container1 b-container" id="b-container">
          <form className="form1" id="a-form" action="/signup-otp" onSubmit={handleSubmit} method="post">
            <h2 className="form_title title">Create Account</h2>
            <span className="form__span">or use email for registration</span>
            <input className="form__input" type="text" placeholder="Name" name="Name" />
            <p style={{ textAlign: 'start', color: 'red', marginInlineStart: '-222px' }} id="n_err"></p>
            <input className="form__input" type="email" placeholder="Email" name="Email" />
            <p style={{ textAlign: 'start', color: 'red', marginInlineStart: '-222px' }} id="e_err"></p>
            <input className="form__input" type="password" placeholder="Password" name="Password" />
            <p style={{ color: 'red', marginInlineStart: '-222px' }} id="p_err"></p>
            <input className="form__input" type="text" placeholder="Referral code (option)" name="referral" />
            <input className="form__button button" id="a-sub" type='submit' value="SIGN UP" />
            <div className="button lorder lorder-hidden" id="a-spinner">
              <div className="dot-pulse">
                <div className="dot-pulse__dot"></div>
              </div>
            </div>
          </form>
        </div>
        <div className="switch" id="switch-cnt">
          <div className="switch__circle"></div>
          <div className="switch__circle switch__circle--t"></div>
          <div className="switch__container" id="switch-c1">
            <h2 className="switch__title title">Welcome Back !</h2>
            <p className="switch__description description">To keep connected with us please login with your personal info</p>
            <button className="switch__button button switch-btn">GO TO SIGN UP</button>
          </div>
          <div className="switch__container is-hidden" id="switch-c2">
            <h2 className="switch__title title">Hello Friend !</h2>
            <p className="switch__description description">Enter your personal details and start journey with us</p>
            <button className="switch__button button switch-btn">GO TO SIGN IN</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default login;
