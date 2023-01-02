import React from 'react'
import "./login.css"
import onboardingLogo from "../../asstes/images/img_onboarding_illustration3.png";
import virtualLogo from "../../asstes/images/img_virtuallearn logo_splash 2.png";
import fb from "../../asstes/images/facebook.png";
import google from "../../asstes/images/google.png";

const Login = () => {
    return (
        <>
            <div>
                <div className='loginPage'>
                    <div className='flexDivision'>
                        <div  className='flexLeft'>
                        <img
                        src={onboardingLogo}
                        alt="logo"
                        // className="SignIn-tick"
                      />
                        </div>
                        <div  className='flexRight'>

                      </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login