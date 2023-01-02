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
                        <div className='flexLeft'>
                            <img
                                src={onboardingLogo}
                                alt="logo"
                            // className="SignIn-tick"
                            />
                            <div className='seamless'>Seamless Workflow</div>
                            <div className='seamlessContent'>Sync rosters, create and assign impactful video experiences, enrich your flipped classroom, and streamline tedious grading.</div>
                        </div>
                        <div className='flexRight'>
                            sfsdddddd
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login